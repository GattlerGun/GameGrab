import { useEffect, useRef, useState } from 'react';
import openBtn from './../carousel/arrow-slider-right.svg'
import './asideFilters.scss'

const AsideFilters = () => {
    const [price, setPrice] = useState("");
    const [translateFilter, setTranslateFilter] = useState(100);
    const [translateBtn, setTranslateBtn] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const slider = useRef(null);

    useEffect(() => {
        if (window.innerWidth > 1520) {
            setIsOpen(true)
        }
        if (isOpen) {
            setTranslateFilter(0);
            setTranslateBtn(401);
        } else {
            setTranslateFilter(100);
            setTranslateBtn(0);
        }
    }, [isOpen])

    useEffect(() => {
        if (slider.current !== null) {
            setPrice("10$")
        }
        setPrice(`${slider.current.value}$`)
        if (slider.current.value > 61) {
            setPrice("any price")
        }
        if (slider.current.value < 1) {
            setPrice("free")
        }
    }, [price])

    return (
        <aside className="filters">
            <div className='filters__box'
                style={{
                    transform: `translate(${-translateFilter}%)`
                }}>
                <div className="filters__content">
                    <h2 className="filters__title title">Filters</h2>
                    <h4 className='filters__price-value'>Price: <span>{price} </span></h4>
                    <input className='filters__slider' type='range' step={5} defaultValue={10}
                        ref={slider} min={0} max={65} onChange={() => {
                            setPrice(`${slider.current.value}$`);
                        }}
                    />
                    <div className='filters__genres'>
                        <h4 className='filters__genres-title title'>Genres</h4>
                    </div>
                </div>
            </div>
            <button className="filters__open-btn" onClick={() => { setIsOpen(!isOpen) }}
                style={{
                    transform: `translate(${translateBtn}%)`
                }}>
                <img className={`filters__open-img ${isOpen ? "filters__open-img--open" : ""}`} src={openBtn} alt='Filter open button' />
            </button>
        </aside>

    );
}

export default AsideFilters;