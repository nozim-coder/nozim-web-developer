import React from 'react'
import classes from './Mymodal.module.css'


// {[classes.myModal, classes.active].join(' ')}
// {classes.myModalContent}
function MyModal ({children, modal,setModal }) {

    const moduleClasses= [classes.myModal]
    if(modal){
        moduleClasses.push(classes.active)
    }

    return (
        <div className={moduleClasses.join(' ')} onClick={()=> setModal(false)}>
            <div className={classes.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal
