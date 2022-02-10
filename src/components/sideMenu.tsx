import React, { Component } from 'react';
import './../style-sheets/stylesheet.css';

class SideMenu extends Component {
    state = {
        active: null,
        buttons: ["login", "analytics", "transactions", "scheme", "calendar", "notes"]
    };
    render() {
        return (
            <React.Fragment>
                <div id="login" onClick={() => this.activateButton("login")}>
                    Login
                </div>
                <div id="analytics" onClick={() => this.activateButton("analytics")}>
                    Analytics
                </div>
                <div id="transactions" onClick={() => this.activateButton("transactions")}>
                    Transactions
                </div>
                <div id="scheme" onClick={() => this.activateButton("scheme")}>
                    Scheme
                </div>
                <div id="calendar" onClick={() => this.activateButton("calendar")}>
                    Calendar
                </div>
                <div id="notes" onClick={() => this.activateButton("notes")}>
                    Notes
                </div>
                <div onClick={() => this.closeMenu()}>
                    close
                </div>
            </React.Fragment>
        )
    }

    renderActive = () => {
        if (this.state.active !== null)
        {
            this.state.buttons.forEach((item) => {document.getElementById(item)!.style.color = "#7c7a7a"});
            document.getElementById(this.state.active)!.style.color = "lime";
        }
    };

    activateButton(id: string) {
        this.setState({active: id});
        this.renderActive();
    }

    closeMenu = () => {
        let width = document.getElementById("side-menu")!.clientWidth;
        let position = 0;

        let movement = setInterval(function () {
            position -= 1;
            document.getElementById("side-menu")!.style.left = position+"px";
            if (position === (width *-1))
            {
                document.getElementById("side-menu")!.style.display = "none";
                clearInterval(movement);
            }

        }, 25);

    };

    openMenu = () => {
        document.getElementById("side-menu")!.style.display = "flex";
        let position = -200;

        let movement = setInterval(function () {
            position += 1;
            document.getElementById("side-menu")!.style.left = position+"px";
            if (position === 0)
            {
                clearInterval(movement);
            }

        }, 25);

    };

}

export default SideMenu;