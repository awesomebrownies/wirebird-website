"use client"

export default function SizeLayout( { children, addStyle} ){
    let style = "flex flex-col items-center " + addStyle;
    return (
    <div className={style}>
        <div className="flex w-[80rem]">
            {children}
        </div>
    </div>
    )
}