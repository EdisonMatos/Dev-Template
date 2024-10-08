import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import ListGroupSocial from "../sectionElements/ListGroupSocial";
import { Link as ScrollLink } from "react-scroll";
// import HeadlessDemo from "../sectionElements/Sidebar";
import SidebarSocial from "../sectionElements/SidebarSocial";
import { px } from "framer-motion";
import content from "../../content/content";
import Button from "../interactives/Button";
import { FaWhatsapp } from 'react-icons/fa';


const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function NavbarSocial() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sidebarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon(!showMenuIcon);
      setShowSidebarContent(!showSidebarContent);
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false);
          setIsAnimating(false);
        }, 950);
      } else {
        setShowSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowListGroup(false);
    } else {
      setShowListGroup(true);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
    setShowMenuIcon(true);
  };

  const handleSidebarItemClick = () => {
    handleCloseSidebar();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      {/* COR DA NAVBAR E DA BORDA */}

      <div
        className={`fixed z-20 w-full transition-colors duration-1000 ${
          scrolling
            ? "bg-gradient-to-b from-black to-bgSectionDark bg-opacity-100 shadow-lg transition-all duration-1000 border-b-[1px] border-solid border-neutral-700"
            : "transition-colors duration-1000 border-b-[1px] border-transparent border-black"
        }`}
      >
        {/* FIM DA COR DA NAVBAR E DA BORDA */}

        <Navbar>
          <ScrollLink
            to="home"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            href="#"
          >
            <img
              src={content.texts.navbar.logo.img}
              alt={content.texts.navbar.logo.alt}
              className={`${
                scrolling
                  ? "w-[50%] max-w-[50%] tablet2:w-[40%] tablet2:max-w-[40%] desktop1:w-[60%] desktop1:max-w-[60%] transition-all duration-1000 "
                  : "my-[20px] w-[70%] tablet1:w-[60%] tablet2:w-[50%] desktop1:w-[70%] desktop2:w-[100%] transition-all duration-1000 "
              } tablet3:mb-0`}
            />
          </ScrollLink>
          <div className="flex items-center justify-between gap-[16px]">
            <div
              className={`hidden tablet1:flex desktop1:hidden ${
                scrolling ? "" : ""
              }`}
            >
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label={content.texts.navbar.ctaButtonTextResponsive}
                buttonLink={whatsappContactLink}
                className={`${scrolling ? "" : ""}`}
                size="small"
                icon={
                  <FaWhatsapp size={18} />
                }
              />
            </div>
            <div
              className={`flex items-center desktop1:hidden ${
                scrolling ? "" : ""
              } `}
            >
              <SidebarSocial />
            </div>
          </div>
          {showListGroup ? <ListGroupSocial /> : null}
        </Navbar>
      </div>
    </div>
  );
}
