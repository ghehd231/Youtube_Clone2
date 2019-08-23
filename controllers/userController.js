import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle:"Join"});
};

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;

    if(password !== password2){
        res.status(400)
        res.render("join", {pageTitle: "Join"});
    }else{
        //To do: REgister User
        //To do: log user in
        res.redirect(routes.home);
    }
};
export const login = (req, res) => res.render("Login", {pageTitle : "Login"});
export const logout = (req, res) => res.render("Logout", {pageTitle : "Logout"});
export const users = (req, res) => res.render("User", {pageTitle : "User"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle : "userDetail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : "editProfile"});
export const chagnePassword = (req, res) => res.render("chagnePassword", {pageTitle : "chagnePassword"});
