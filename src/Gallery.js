import React from 'react'

function Gallery(props) {
    const data=props.data;
    return (
        <div>
            <div>
                <div>
                    <ul style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
                    {
                        data.length>0 && data.map((item)=>{
                            return (<li key={item.id} style={{listStyleType:"none"}}>
                                        <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} style={{padding:"10px"}}/>
                                    </li>)

                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Gallery

