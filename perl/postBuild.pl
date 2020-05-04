#!/usr/bin/perl 

# To do - add input and output file names as command line arguments + help documentation

print "Start of perl program postBuild.pl\n";

# simply process file for now
my $inputFileName = "build/index.html";
my $outputFileName = "perl/tmp_index.html";
open(my $IN_HTML,  $inputFileName) || die "Could not open file '$inputFileName' $!";
open(my $OUT_HTML, "> $outputFileName") || die "Could not write to file $outputFileName";
# Read file, should only be 1 line
my $inputHTML = <$IN_HTML>;

# remove any newlines
$inputHTML =~ s/\n//g;

# <script>

my $rest = "";
my $outputHTML = "";
my $processInputHTML = $inputHTML;
my $searching = 1; #true
while( $searching ) {
  if ( $processInputHTML =~ /(<script\b)/) {
    $outputHTML = $outputHTML . $` . $& ;
    $rest = $';
    # move along $rest until reach </script>
    if ( $rest =~ />\s*<\s*\/script/ ) {
      $outputHTML = $outputHTML . $` . " defer " . $&;
      $processInputHTML = $';
      # print "defer added\n";
    } else {
      die "could not match </script>, very strange\n";
    }
  } else {
    $outputHTML = $outputHTML . $processInputHTML;
    $searching = 0; #false
  }
}

# <link>

$processInputHTML = $outputHTML;
$outputHTML = "";
$searching = 1; #true
my $stylesheet = 0; #false
while( $searching ) {
  if ( $processInputHTML =~ /(<link\b)/) {
    $outputHTML = $outputHTML . $` . $& ;
    $rest = $';
    # move along $rest until reach rel="stylesheet" or </link>
    if ( $rest =~ /\brel\s*=\s*"\s*stylesheet\s*"/ ) {
      $stylesheet = 1; # true
      $outputHTML = $outputHTML . $` . $& ;
      $rest = $' ;
      # print "stylesheet\n";
      # now search for </link> which means > 
      if ( $rest =~ />/) {
        $outputHTML = $outputHTML . $` . " media=\"print\" " . $&;
        $processInputHTML = $';
        $stylesheet = 0; # false - set up for next <link>
      } else {
        die "could not match </link> after finding stylesheet, very strange\n";
      }
    } elsif ( $rest =~ />/ ) {
        # <link> was not a stylesheet
        $outputHTML = $outputHTML . $` . $& ;
        $processInputHTML = $';
    } else {
      die "could not match </link>, very strange\n";
    }
  } else {
    $outputHTML = $outputHTML . $processInputHTML;
    $searching = 0; #false
  }
}
# output to file
print $OUT_HTML "$outputHTML \n" ;
