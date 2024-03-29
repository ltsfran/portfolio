import styled, { keyframes } from 'styled-components'

const openAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
`

const closeAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(0.8) translateZ(0);
  }
  25% {
    opacity: 0;
    translate: scale(0.6) translateZ(0)
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`

export const MenuListWrapper = styled.ul`
  position: absolute;
  z-index: 1;
  transform-origin: top right;
  inset: 0 0 auto auto;
  transform: translate3d(-1rem, 58px, 0);
`

export const MenuListContent = styled.div`
  min-width: 224px;
  padding: 0.25rem 0;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transform-origin: top right;

  &.menu-enter {
    animation: ${openAnimation} 0.3s forwards;
  }

  &.menu-exit-active {
    animation: ${closeAnimation} 0.3s forwards;
  }
`

export const MenuItemContent = styled.button`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
