import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                

                <div class="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="https://github.com/yashbeersingh" style={{color: "#65b6f0"}}> YASHBEER SINGH</a>
                </div>

            </footer>
        );
    }
}

export default Footer;