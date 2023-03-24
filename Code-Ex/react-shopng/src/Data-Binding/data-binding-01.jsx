

export function DataBinding01()
{
  
    var id= 1;
    var name = "Samsung TV"
    var price = 4500;
    var stock = true
  
    return(
       <div className="container">
         <h1 className="text-center">Product Details</h1>
         <dl >
            <dt>Product ID</dt>
            <dd>{id}</dd>

            <dt>Product Name</dt>
            <dd>{name}</dd>

            <dt>Product Price</dt>
            <dd>{price}</dd>

            <dt>Product Stock</dt>
            <dd>{stock==true? "Avaialable" : "not available"  }</dd>
         </dl>
       </div>
    )
}