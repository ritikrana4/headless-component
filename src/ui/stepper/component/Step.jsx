
export const Step = ({label, disabled,active, style, as="button", ...rest},ref) => {
    const Element = as;
console.log(active,label,"active")
    return(
        <Element
        // ref={ref}
        style={{
            color:"white",
            pointerEvents : disabled ? 'none' : 'auto',
            opacity : disabled ? 0.5 : 1,
            backgroundColor : active ? 'blue' : "grey",
            ...style
        }}
        {...rest}
        >
            {label}
        </Element>
    )
}

