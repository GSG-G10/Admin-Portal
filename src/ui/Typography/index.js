import "./style.css"
export const H1 = ({children}) => {
  return <h1 className="primary-header">{children}</h1>;
};
export const H4 = ({children}) => {
  return <h4 className="second-header">{children}</h4>;
};
export const H5 = ({children}) => {
  return <h5 className="third-header">{children}</h5>;
};