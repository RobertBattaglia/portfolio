import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

import Logo from "../images/svgs/logo.svg"
import { theme } from "../constants"

const HeaderStyled = styled("header")`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`

const grow = keyframes`
  50% {
    transform: scale(1.33);
  }
  100% {
    transform: scale(1);
  }
`

const LogoWrapper = styled("span")`
  margin-left: 1.5rem;
  :hover {
    animation: ${grow} 600ms;
  }
`

export const Button = styled("button")`
  margin-right: 1.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid #4ccdd6;
  border-radius: 1rem;
  color: ${theme.secondaryColor};
  background-color: #fff;
  font-size: 1rem;
  -webkit-transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    background-color: ${theme.secondaryColor};
    color: #fff;
  }
`

function Header({ showingGlasses, setShowingGlasses }) {
  const enterText = node => {
    const messages = [
      "Hello Rob, my name is... ~ and I wanted to contact you because...",
      "What's up Rob, ~ I gotta tell you something crazy...",
    ]
    const text = messages[Math.floor(Math.random() * messages.length)]
    const enterChar = idx => {
      const char = text.charAt(idx)
      const timeout = char === "~" ? 500 : Math.random() * 150
      if (char !== "~") node.value += char
      if (idx < text.length) {
        setTimeout(() => {
          enterChar(idx + 1)
        }, timeout)
      } else {
        node.focus()
      }
    }
    enterChar(0)
  }

  const handleClick = () => {
    const contact = document.querySelector("#contact")
    const messageField = document.querySelector("#contact-message")
    messageField.value = ""
    contact.scrollIntoView()
    enterText(messageField)
  }

  return (
    <HeaderStyled>
      <LogoWrapper>
        <Logo
          onClick={() => {
            setShowingGlasses(!showingGlasses)
          }}
        />
      </LogoWrapper>
      <Button onClick={handleClick}>Contact</Button>
    </HeaderStyled>
  )
}

export default Header
