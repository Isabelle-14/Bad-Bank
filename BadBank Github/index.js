function Spa() {
    const ctx = React.useContext(UserContext);

    return ( <
        HashRouter >
        <
        div >
        <
        NavBar / >
        <
        UserContext.Provider value = {
            {} } >
        <
        Route path = "/login/"
        component = { Login }
        /> <
        Route path = "/"
        exact component = { Home }
        /> <
        Route path = "/alldata/"
        component = { AllData }
        />           <
        Route path = "/account/"
        component = { Account }
        /> <
        Route path = "/createaccount/"
        component = { CreateAccount }
        /> <
        Route path = "/deposit/"
        component = { Deposit }
        /> <
        Route path = "/withdraw/"
        component = { Withdraw }
        /> <
        /UserContext.Provider> <
        /div> <
        /HashRouter>
    );
}

ReactDOM.render( <
    Spa / > ,
    document.getElementById('root')
);