function Wrapper({children,color="orange"}){
    return(
       
        <div style={{color:color}}>
             <hr />
            {children}
        </div>
    )
}
export default Wrapper;