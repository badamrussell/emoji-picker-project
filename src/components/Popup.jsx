import React from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";

// popper css guidance
// https://popper.js.org/docs/v2/tutorial/


const PopupContainer = styled.div`
  position: absolute;
  background-color: #EEE;
  border-radius: 4px;
  border: 1px solid #999;
  z-index: 100;

  -webkit-box-shadow: -3px 14px 22px -27px rgba(84,84,84,1);
  -moz-box-shadow: -3px 14px 22px -27px rgba(84,84,84,1);
  box-shadow: -3px 14px 22px -27px rgba(84,84,84,1);

  &[data-popper-placement^='top'] > .popup-arrow {
    bottom: 0px;

    &::before {
      transform: rotate(45deg);
    }
  }

  &[data-popper-placement^='bottom'] > .popup-arrow {
    top: -4px;

    &::before {
      transform: rotate(-135deg);
    }
  }

  &[data-popper-placement^='left'] > .popup-arrow {
    right: -4px;
  }

  &[data-popper-placement^='right'] > .popup-arrow {
    left: -4px;
  }

  & > .popup-arrow {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: inherit;

    visibility: hidden;

    &::before {
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: inherit;

      visibility: visible;
      content: '';

      border-color: #999;
      border-style: solid;
      border-width: 0 1px 1px 0;
    }
  }
`;
const PopupArrow = styled.div`
  
`;

function PopupWindow({ refElement, isShowing, children }) {
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);
  const { styles, attributes } = usePopper(refElement, popperElement, {
    placement: 'top',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
          padding: 8,
        },
      },
 
      {
        name: 'offset',
        options: {
          offset: [0, 5],
        },
      },
    ],
  });

  return isShowing
    ? (
      <PopupContainer ref={setPopperElement} style={styles.popper} {...attributes.popper} onClick={(e) => { e.stopPropagation(); }}>
        {children}
        <div className="popup-arrow" ref={setArrowElement} style={styles.arrow} />
      </PopupContainer>
    )
    : null;
}

export const StyledPopupAnchor = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  
  & > * {
    display: hidden;
    display: block;
    width: 1px;
    height: 1px;
  }
`;

export const PopupAnchor = React.forwardRef(({ isVisible, x, y }, ref) => {
  return (
    <StyledPopupAnchor
      style={{
        top: y,
        left: x,
        visibility: 'inline-block',// isVisible ? 'inline-block' : 'none',
      }}
    >
      <div ref={ref} />
    </StyledPopupAnchor>
  )
});

export default function Popup({ children, clickPosition }) {
  const [refElement, setRefElement] = React.useState(null);

  return (
    <>
      <PopupAnchor ref={setRefElement} {...clickPosition} />

      <PopupWindow refElement={refElement} isShowing={clickPosition.isVisible}>
        {children}
      </PopupWindow>
    </>
  );
}