import { BrandIcon } from "../BrandIcon/BrandIcon"

export const NavBar = () => {
  return (
    <div className="container-fluid navbar-container sticky-top">
        <div className="row justify-content-around">
            <div className="navbar-text col-4 d-flex justify-content-start align-self-center">
                <h6 className="me-3">Work</h6>
                <h6 className="ms-3 ">Contact me!</h6>
            </div>
            <div className="col-4 align-self-center ms-5">
            <BrandIcon />
            </div>
            <div className="col-2 social-media d-flex justify-content-end align-self-center me-3">
                <i className="bi bi-github me-4"></i>
                <i className="bi bi-linkedin me-4"></i>
                <i className="bi bi-twitter"></i>
            </div>
        </div>
    </div>
  )
}
