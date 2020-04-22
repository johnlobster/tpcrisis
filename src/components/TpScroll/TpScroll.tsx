
const TpScroll: (id:string) => void = (id) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView()
  }
};

export default TpScroll;