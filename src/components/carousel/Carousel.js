import { cloneElement, useEffect, useState, Children } from 'react';

import Dot from './Dot';

import leftArrow from './arrow-slider-left.svg';
import rightArrow from './arrow-slider-right.svg';
import './carousel.scss';

export const Carousel = ({ children, dotted, autoplay, arrow, infinite, head, tail }) => {
    const [pages, setPages] = useState([])
    const [clonesCount] = useState({ head: head, tail: tail });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState(300);
    const [touchPosition, setTouchPosition] = useState(null);
    const [isHover, setIsHover] = useState(false);

    const createHeadClones = (children) => {
        let headClone = [];
        for (let i = clonesCount.head; i > 0;) {
            headClone = [...headClone, cloneElement(children[Children.count(children) - i], {
                key: `head${i - 1}`
            })];
            i--
        }
        return headClone
    }
    const createTailClones = (children) => {
        let tailClone = [];
        for (let i = 0; i < clonesCount.tail; i++) {
            tailClone = [...tailClone, cloneElement(children[i], {
                key: `tail${i}`
            })]
        }
        return tailClone
    }

    useEffect(() => {
        if (!infinite) { setPages(...children) };
        setPages([
            createHeadClones(children),
            ...children,
            createTailClones(children)
        ])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, infinite])

    useEffect(() => {
        if (!autoplay) return
        const interval = setInterval(() => {
            !isHover && carouselInfinitiScroll()
        }, 3000);
        return () => clearInterval(interval);
    })

    useEffect(() => {
        if (currentIndex === 0) {
            setCurrentIndex(clonesCount.head)
            return
        }
        if (currentIndex === clonesCount.head - 1) {
            setTimeout(() => {
                setTransitionDuration(0)
                return setCurrentIndex(Children.count(pages) - 1 - clonesCount.tail);
            }, 300)
        };
        if (currentIndex === Children.count(pages) - clonesCount.tail) {
            setTimeout(() => {
                setTransitionDuration(0)
                return setCurrentIndex(clonesCount.head);
            }, 300)
        };

    }, [clonesCount.head, clonesCount.tail, currentIndex, pages]);

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(300)
            }, 300)
        }
    }, [transitionDuration])
    const renderDots = () => {
        let dots = [];
        let length = Children.count(pages) - clonesCount.head - clonesCount.tail;
        for (let i = 0; i < length; i++) {
            dots = [...dots, (<Dot number={i} cloneCount={clonesCount.head} setSlides={setCurrentIndex}
                currentIndex={currentIndex} key={`dot-${i}`}
            />)]
        }
        return dots;
    };

    const handleLeftArrowClick = () => {
        return setCurrentIndex(currentIndex - 1);
    }

    const handleRightArrowClick = () => {
        return setCurrentIndex(currentIndex + 1);
    }

    const carouselInfinitiScroll = () => {
        handleRightArrowClick()
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }
        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;
        if (direction > 10) {
            handleRightArrowClick()
        }
        if (direction < -10) {
            handleLeftArrowClick()
        }
        setTouchPosition(null);
    }

    const isVisibleLeft = () => {
        if (!arrow) return false
        if (infinite) {
            return true
        }
        return currentIndex > 0
    }
    const isVisibleRight = () => {
        if (!arrow) return false
        if (infinite) {
            return true
        }
        return currentIndex < Children.count(pages) - 1
    }
    return (
        <>
            {isVisibleLeft() && <button className="slider__arrow slider__left" type="button" onClick={handleLeftArrowClick}>
                <img className="arrow__img" src={leftArrow} alt="arrow left" />
            </button>}
            <div className="slider">
                <div className="slider__slide-wrapper"
                    style={{
                        transitionDuration: `${transitionDuration}ms`,
                        transform: `translate(-${currentIndex * 100}%)`
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onMouseEnter={() => {setIsHover(true)}}
                    onMouseLeave={() => {setIsHover(false)}}
                >
                    {pages}
                </div>
            </div>
            {isVisibleRight() && <button className="slider__arrow slider__right" type="button" onClick={handleRightArrowClick}>
                <img className="arrow__img" src={rightArrow} alt="arrow right" />
            </button>}
            {
                dotted && <ul className="slider__dots">
                    {renderDots()}
                </ul >
            }
        </>
    )
}