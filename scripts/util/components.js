define(["jquery"], function($) {

    /**
     * Used as <geko-data [data]>
     * Used to store any data for other elements, otherwise, a useless element.
     */
    class GekoData extends HTMLElement {
        constructor() {
            super();
        }
    }

    /**
     * Used as <geko-navstick>
     */
    class GekoNavStick extends HTMLElement {
        constructor() {
            super();

            this.style.position = "fixed";
            this.style.width = "100%";
            this.style.top = "0";
            this.style.left = "0";
            $(this).next().css({ "padding-top": "100px" });
        }
    }

    /**
     * Used as <div is="geko-navbar">
     */
    class GekoNavBar extends HTMLDivElement {
        constructor() {
            super();

            this.style.overflow = "hidden";
            if($(this).attr("background") == null) {
                this.style.backgroundColor = '#333';
            } else {
                this.style.backgroundColor = $(this).attr("background");
            }
        }
    }

    /**
     * Used as <img is="geko-navLogo">
     */
    class GekoNavLogo extends HTMLImageElement {
        constructor() {
            super();

            this.style.height = "52px";
            this.style.width = "auto";
            this.style.float = "left";
            this.style.borderRight = "1px solid #bbb";
        }
    }

    /**
     * Used as <a is="geko-navlink" goto="your/link.html" activ="no" off="#bbb" on="#111" active-color="#4CAF50" />
     */
    class GekoNavLink extends HTMLAnchorElement {
        constructor() {
            super();

            this.style.float = "left";
            this.style.borderRight = "1px solid #bbb";
            this.style.fontSize = "16px";
            this.style.color = "white";
            this.style.textAlign = "center";
            this.style.padding = "14px 16px";
            this.style.textDecoration = "none";
            this.style.cursor = "pointer";
            if(this.getAttribute('activ') === "no") {
                this.style.backgroundColor = this.getAttribute("off");
            } else {
                this.style.backgroundColor = this.getAttribute("active-color");
            }
            this.onmouseover = function() {
                this.style.backgroundColor = this.getAttribute("on");
            }
            this.onmouseout = function() {
                var val = this.getAttribute('activ');
                if(val === "no") {
                    this.style.backgroundColor = this.getAttribute("off");
                } else {
                    this.style.backgroundColor = this.getAttribute("active-color");
                }
            }
            this.addEventListener('click', function(){
                window.location.href = this.getAttribute("goto");
            });
        }
    }

    /**
     * Used as <a is="geko-navlinkr" goto="your/link.html" activ="no" off="#bbb" on="#111" active-color="#4CAF50" />
     */
    class GekoNavLinkR extends HTMLAnchorElement {
        constructor() {
            super();

            this.style.float = "right";
            this.style.borderRight = "1px solid #bbb";
            this.style.fontSize = "16px";
            this.style.color = "white";
            this.style.textAlign = "center";
            this.style.padding = "14px 16px";
            this.style.textDecoration = "none";
            this.style.cursor = "pointer";
            if(this.getAttribute('activ') === "no") {
                this.style.backgroundColor = this.getAttribute("off");
            } else {
                this.style.backgroundColor = this.getAttribute("active-color");
            }
            this.onmouseover = function() {
                this.style.backgroundColor = this.getAttribute("on");
            }
            this.onmouseout = function() {
                var val = this.getAttribute('activ');
                if(val === "no") {
                    this.style.backgroundColor = this.getAttribute("off");
                } else {
                    this.style.backgroundColor = this.getAttribute("active-color");
                }
            }
            this.addEventListener('click', function() {
                window.location.href = this.getAttribute("goto");
            });
        }
    }

    /**
     * Used as <div is="geko-navdropdown" activ="no" off="#bbb" on="#111" active-color="#4CAF50">
     */
    class GekoNavDropDown extends HTMLDivElement {
        constructor() {
            super();

            this.style.overflow = "hidden";
            this.style.float = "left";
            if(this.getAttribute('activ') === "no") {
                this.style.backgroundColor = this.getAttribute("off");
            } else {
                this.style.backgroundColor = this.getAttribute("active-color");
            }
            this.onmouseover = function() {
                this.style.backgroundColor = this.getAttribute("on");
            }
            this.onmouseout = function() {
                var val = this.getAttribute('activ');
                if(val === "no") {
                    this.style.backgroundColor = this.getAttribute("off");
                } else {
                    this.style.backgroundColor = this.getAttribute("active-color");
                }
            }
        }
    }

    /**
     * Used as <button is="geko-navdropbutton" reveal="#id">
     */
    class GekoNavDropButton extends HTMLButtonElement {
        constructor() {
            super();

            this.style.cursor = "pointer";
            this.style.fontSize = "16px";
            this.style.border = "none";
            this.style.outline = "none";
            this.style.color = "white";
            this.style.padding = "14px 16px";
            this.style.backgroundColor = "inherit";
            this.style.fontFamily = "inherit";
            this.style.margin = "0";
            if(this.getAttribute('activ') === "no") {
                this.style.backgroundColor = this.getAttribute("off");
            } else {
                this.style.backgroundColor = this.getAttribute("active-color");
            }
            this.onmouseover = function() {
                this.style.backgroundColor = this.getAttribute("on");
            };
            this.onmouseout = function() {
                var val = this.getAttribute('activ');
                if(val === "no") {
                    this.style.backgroundColor = this.getAttribute("off");
                } else {
                    this.style.backgroundColor = this.getAttribute("active-color");
                }
            };

            this.addEventListener("click", function() {
                var nextSib = $(this).attr("reveal");
                var nsDisp =  $("#" + nextSib).css("display");
                if(nsDisp === "none") {
                    document.getElementById(nextSib).style.display = "block";
                    //$(nextSib).css({ "display": "block" });
                } else {
                    //$(nextSib).css({ "display": "none" });
                    document.getElementById(nextSib).style.display = "none";
                }
            });
        }
    }

    /**
     * Used as <div is="geko-navdropcontainer">
     */
    class GekoNavDropContainer extends HTMLDivElement {
        constructor() {
            super();

            this.style.display = "none";
            this.style.position = "absolute";
            this.style.backgroundColor = "#f9f9f9";
            this.style.minWidth = "160px";
            this.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)";
            this.style.zIndex = "1";
        }
    }

    /**
     * Used as <a is="geko-dropcontlink" goto="your/link.html" off="#bbb" on="#111" />
     */
    class GekoNavDropContLink extends HTMLAnchorElement {
        constructor() {
            super();

            this.style.float = "none";
            this.style.color = "black";
            this.style.padding = "12px 16px";
            this.style.textDecoration = "none";
            this.style.display = "block";
            this.style.textAlign = "left";
            this.style.cursor = "pointer";
            this.onmouseover = function() {
                this.style.backgroundColor = this.getAttribute("on");
            }
            this.onmouseout = function() {
                this.style.backgroundColor = this.getAttribute("off");
            }
            this.addEventListener('click', function() {
                window.location.href = this.getAttribute("goto");
            });
        }
    }

    customElements.define('geko-data', GekoData);
    customElements.define('geko-navstick', GekoNavStick);
    customElements.define('geko-navbar', GekoNavBar, { extends: "div" });
    customElements.define('geko-navlogo', GekoNavLogo, { extends: "img" });
    customElements.define('geko-navlink', GekoNavLink, { extends: "a" });
    customElements.define('geko-navlinkr', GekoNavLinkR, { extends: "a" });
    customElements.define('geko-navdropdown', GekoNavDropDown, { extends: "div" });
    customElements.define('geko-navdropbutton', GekoNavDropButton, { extends: "button" });
    customElements.define('geko-navdropcontainer', GekoNavDropContainer, { extends: "div" });
    customElements.define('geko-navdropcontlink', GekoNavDropContLink, { extends: "a" });
});