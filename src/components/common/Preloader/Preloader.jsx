import s from './Preloader.module.scss'

let Preloader = (props) => {
    return (
        <img src='https://pear-advert.ru/images/uploads/blog/273/30.gif' alt='preloading' className={s.preloader} />
    )
}

export default Preloader