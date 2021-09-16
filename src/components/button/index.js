import styles from './styles.css'
import clsx from "clsx";

const Button = ({className, ...rest}) => (
    <button className={clsx(styles.btn, className)} {...rest}/>
)

export default Button;