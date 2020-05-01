import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TpLink.module.scss";

// import iLinkImage from "../../images/ilink2.png";
//import xLinkImage from "../../images/ilink2.png";

// To do ARIA props, particularly on icon
interface  TpLinkProps {
  to: string,
  className?: string,
  external?: boolean,
  scroll?: boolean
}
const TpLink: React.FunctionComponent<TpLinkProps> = ({...props}) => {
  // let passClassName: boolean = false;
  // let cName: string | undefined ="";
  // const [passMe, handlePassMe] = React.useState(false);

  // React.useEffect(() => {
  //   if (props.hasOwnProperty("className")) {
  //     handlePassMe(true);
  //     passClassName=true;
  //   }
  // },[]);
  

  let externalLink: boolean | undefined = false;
  if( props.hasOwnProperty("external")) {
    externalLink = props.external;
  }

  let internalScroll: boolean | undefined = false;
  if (props.hasOwnProperty("scroll")) {
    internalScroll = props.scroll;
    
  }

  const scrollMe = (event: React.MouseEvent): void => {
    const element = document.querySelector(props.to);
    if (element) {
      console.log("Scrolling to " + props.to);
      element.scrollIntoView()
    } else {
      console.log("Couldn't scroll to " + props.to);
    }
  }

  const Scroller: React.FunctionComponent = (sProps) => {
    return (
      <span onClick={scrollMe} className={styles.scrollStyle} role="button" aria-haspopup="true" aria-expanded="false">
        {sProps.children}
      </span>
    );
  }
  
  // `className="${cName}"`

  // if (internalScroll) {

  // } else {

  // }
  
  // const scroller = (kids: React.ReactNode) => {
  //   return(
  //     <span onClick={scrollMe} className={styles.scrollStyle} role="button" aria-haspopup="true" aria-expanded="false">
  //       {kids}
  //     </span>
  //   );
  // }
  // const linker = (kids: React.ReactNode) => {
  //   return (
  //     <div
  //       to={props.to}
  //       {...kids}
  //       >
  //     </div>
  //   );
  // }

  const meme: boolean = props.hasOwnProperty("className");
  return (
    

    <span className={styles.linkStyle}  >
      {internalScroll ? (
        <Scroller>
          {props.children}
        </Scroller>
      ) : (
        props.hasOwnProperty("className") ? (
            <Link to={props.to} className={props.className}>
              {props.children}
            </Link>
          ) : (<Link to={props.to}>
            {props.children}
          </Link>)
          
      )}

    </span>
  );
};

export default TpLink;

// {
// !internalScroll && props.hasOwnProperty("className") ? (
//   <Link to={props.to} className={props.className}>
//     {props.children}
//   </Link>
// ) : (
//     <Link to={props.to}>
//       {props.children}
//     </Link>
//   )
// }