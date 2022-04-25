import React from 'react'
import './Property.css'

function Property({ property, owners, propertysImg, propertysTrace }) {
    const { name, address, price, codeInternal, year, idOwner, id } = property;
    let owner_ = {}
    let propertyImg_ = {}
    let propertyTrace_ = {}
    return (
        <div className='propertyItem '>
            {!propertysImg ? "Cargando..." :
                propertysImg.map((propertyImg, index) => {
                    if (propertyImg.idProperty == id) {
                        propertyImg_ = propertyImg;
                    }
                }

                )
            }

            {!propertysTrace ? "Cargando..." :
                propertysTrace.map((propertyTrace, index) => {
                    if (propertyTrace.idProperty == id) {
                        propertyTrace_ = propertyTrace;
                    }
                }

                )
            }
            <h2>Name:{name}</h2>
            <div className='img'>
            <img className='rounded-3' src={propertyImg_.file} alt="House photo" />
            </div>
            
            <h4>Address:{address}</h4>
            <h4>Price:{price}</h4>
            <h4>Postal code:{codeInternal}</h4>
            <h4>Year:{year}</h4>
            <h4>Tax:{propertyTrace_.tax}%</h4>
            {!owners ? "Cargando..." :
                owners.map((owner, index) => {
                    if (owner.id == idOwner) {
                        owner_ = owner;
                    }
                }

                )
            }

            <h4>Owner:{owner_.name}</h4>
        </div>
    )
}

export default Property