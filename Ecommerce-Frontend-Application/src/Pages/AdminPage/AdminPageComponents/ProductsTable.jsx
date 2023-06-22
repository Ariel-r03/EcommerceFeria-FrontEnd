import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { GetProducts, ImgUpload,AddProduct,DeleteProduct } from "../../../Services/Products";
import { categories,brands } from "../../../Constants";
import AuthContext from "../../../Contexts/Authentication/AuthProvider";
import {
  Edit,
  Delete,
  IconoLupa,
  CloseProductcard,
  Close,
} from "../../../Assets";
import { AddProductForm } from "../AdminPageComponents";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
function ProductsTable() {
  Modal.setAppElement(document.getElementById("root"));
  const [products, setProducts] = useState([]);
  const { auth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleDetails = (e) => {
    console.log(e.target.value);
    setDetail(e.target.value);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSaveDetail = (e) => {
    e.preventDefault();
    setDetails([...details,detail]);
    setDetail("");
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    const formData = new FormData();
    formData.append("photo", file);
    const res = await ImgUpload(formData, auth.user.token);
    setImgUrl(res.url);
    console.log(res);
  };

  const addProduct = async (data,e)=>{
    e.preventDefault();
    console.log(data);
    console.log(details);
    const res= await AddProduct({
       "title": data.title,
       "desc": "5%",
       "icon": imgUrl,
       "categories": data.categories,
       "brand": data.brand,
       "price": data.price,
       "stock": parseInt(data.stock),
       "color": "FDE9E6",
       "description": data.description,
       "details": details, 
    },auth.user.token)
    alert(res.message);
    showProducts();
    setOpen(false);

  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "30%",
    },
  };

  useEffect(() => {
    showProducts();
  }, []);

  const showProducts = async () => {
    const res = await GetProducts();
    setProducts(res);
  };

  const deleteProduct=async(id)=>{
    console.log(id);
    const res= await DeleteProduct(id,auth.user.token);
    showProducts();
    alert(res.message);
  }

  const colums2 = [
    {
      name: "Detalles",
      selector: (row) => row.title,
    },
  ];
  const columns = [
    {
      name: "Nombre del dispositivo",
      selector: (row) => row.title,
    },

    {
      name: "ACCIONES",
      button: true,

      cell: (row) => (
        <>
          <button className="w-[50px]" onClick={() => deleteProduct(row._id)}>
            <img src={Delete} alt="iconDelete" />
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="mx-[3rem]">
      <h1 className="font-bold text-[40px] mt-[3rem] mb-[5rem]">
        Administrar Productos
      </h1>
      <div className="flex flex-row justify-center">
        <input
          className="bg-smoothSlate border-2 rounded-xl w-[90%] h-[40px] mr-2"
          type="text"
        />
        <img src={IconoLupa} alt="" />
      </div>
      <div className="flex flex-row justify-end my-5">
        <span>Agregar Producto</span>{" "}
        <img
          onClick={() => {
            setOpen(true);
          }}
          className="mx-2"
          src={CloseProductcard}
          alt=""
        />
      </div>
      <DataTable
        pagination
        paginationPerPage={6}
        paginationDefaultPage={1}
        responsive
        striped
        columns={columns}
        data={products}
        paginationRowsPerPageOptions={[2, 4, 6]}
      />

      <Modal isOpen={open} style={customStyles}>
        <form action="">
          <div className="flex flex-row h-[50px] justify-between border-b border-slate-800">
            <h2 className="font-bold text-[30px] ">Agregar producto</h2>
            <img
              className="w-[20px]"
              onClick={() => {
                setOpen(false);
              }}
              src={Close}
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <input
              className="my-3 w-[400px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              placeholder="Nombre Producto"
              type="text"
              {...register("title")}
            />
            <input
              className="my-3 w-[400px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              placeholder="Precio"
              type="text"
              {...register("price")}
            />
            <input
              className="my-3 w-[400px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              placeholder="Existencia"
              type="text"
              {...register("stock")}
            />

            <select
              className="my-3 w-[400px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              name=""
              id=""
              {...register("categories")}
            >
              <option selected disabled>
                Seleccione una categoria
              </option>
              {categories.map((c) => (
                <option value={c.id}>{c.title}</option>
              ))}
            </select>
            <select
              className="my-3 w-[400px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              name=""
              id=""
              {...register("brand")}
            >
              <option selected  disabled>
                Seleccione una marca
              </option>
              {brands.map((b) => (
                <option value={b.id}>{b.title}</option>
              ))}
            </select>
           
           
            <input
              onChange={handleFile}
              className="my-3 w-[400px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              placeholder="Imagen"
              type="file"
            />
            <textarea
              className="my-3 w-[400px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              name=""
              id=""
              cols="30"
              rows="2"
              {...register("description")}
            ></textarea>
            <div>
              <input
                onChange={handleDetails}
                value={detail}
                placeholder="Digite cada detalle"
                className="my-3 w-[300px] shadow-md rounded-lg bg-smoothSlate px-5 py-2"
              ></input>
              <button
              type="button"
                onClick={handleSaveDetail}
                className="mx-2 bg-green-500 py-2 rounded-md px-3"
              >
                Guardar
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-end text-white mt-2">
            <button type="submit" onClick={handleSubmit(addProduct)} className="bg-slate-900 mx-3 px-5">Aceptar</button>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="bg-red-600 mx-3 px-5"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ProductsTable;
