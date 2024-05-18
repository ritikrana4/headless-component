
export const Step = ({ label, subLabel, disabled, active, style, as = "button", ...rest }, ref) => {
    const Element = as;
    console.log(active, label, subLabel, "active")
    return (
        <div>
            <Element
                // ref={ref}
                style={{
                    color: "white",
                    pointerEvents: disabled ? 'none' : 'auto',
                    opacity: disabled ? 0.5 : 1,
                    backgroundColor: active ? '#1976d2' : "grey",
                    ...style
                }}
                {...rest}
            >
                {label}


            </Element>
            <div>
                {subLabel}
            </div>
        </div>

    )
}

