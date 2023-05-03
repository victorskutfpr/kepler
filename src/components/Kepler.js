import React, { forwardRef, useRef } from "react";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import { useDispatch } from "kepler.gl/node_modules/react-redux";
import Papa from "papaparse";
import KeplerGL, { useMapControl } from "kepler.gl/dist/components";
import { Setores } from "./Service";
import axios from "axios";
import { useState, useEffect } from "react";

function Map() {
  const keplerGlRef = useRef(null);
  console.log("keplerGlRef", keplerGlRef);

  function handleMapLoaded() {
    const { mapState } = keplerGlRef.current.getKeplerGlInstance();
    let bounds =
      mapState && mapState.get("bearing")
        ? keplerGlRef.current.getMapBounds()
        : null;
    console.log("Map Bounds:", bounds);
  }

  // SetoresAL();
  // ClientesPJ();

  const teste = Setores();
  console.log("teste", teste);

  return (
    <KeplerGl
      id="map"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      width={window.innerWidth}
      height={window.innerHeight}
      onMapLoaded={handleMapLoaded}
      innerRef={keplerGlRef}
    />
  );
}

// function SetoresAL() {
//   const dispatch = useDispatch();
//   const fields = [
//     { name: "Nome_do_bairro" },
//     { name: "V009" },
//     { name: "geometry" },
//   ];

//   const [setores, setSetores] = useState([]);

//   const geoApiQuery = {
//     bottomLeft: {
//       lat: -9.685537076307735,
//       lng: -35.75397491455079,
//     },
//     topRight: {
//       lat: -9.64593854877609,
//       lng: -35.71024417877198,
//     },
//   };

//   const getSetores = async () => {
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/setores/obter_setores",
//         geoApiQuery,
//         {
//           headers: {
//             accept: "application/json",
//           },
//         }
//       );

//       const rows = response.data.SETORES.map((feature) => {
//         return [feature.Nome_do_bairro, feature.V009, feature.geometry];
//       });

//       dispatch(
//         addDataToMap({
//           datasets: {
//             info: {
//               label: "setores_al",
//               id: "setores",
//             },
//             data: {
//               fields,
//               rows,
//             },
//           },
//           options: {
//             centerMap: true,
//             readOnly: false,
//           },
//           config: {
//             mapStyle: { styleType: "dark" },
//           },
//         })
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getSetores();
//   }, []);
// }

// function ClientesPJ() {
//   const dispatch = useDispatch();
//   const fields = [{ name: "CODPARCEIRO" }, { name: "LAT" }, { name: "LNG" }];

//   const [clientespj, setClientesPJ] = useState([]);

//   const geoApiQuery = {
//     map_bounds_retangulo: {
//       bottomLeft: {
//         lat: -9.685537076307735,
//         lng: -35.75397491455079,
//       },
//       topRight: {
//         lat: -9.64593854877609,
//         lng: -35.71024417877198,
//       },
//     },
//   };

//   const getClientesPJ = async () => {
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/clientes/obter_clientes",
//         geoApiQuery,
//         {
//           headers: {
//             accept: "application/json",
//           },
//           params: {
//             query: "",
//             tipo_cliente: "PJ",
//             retornar_informacoes_extras: false,
//             obter_somente_contagem: false,
//             download: false,
//           },
//         }
//       );

//       const rows = response.data.CLIENTES.map((feature) => {
//         return [
//           feature.CODPARCEIRO,
//           feature.LOCATION.coordinates[1],
//           feature.LOCATION.coordinates[0],
//         ];
//       });

//       setClientesPJ(response.data.CLIENTES);

//       dispatch(
//         addDataToMap({
//           datasets: {
//             info: {
//               label: "clientes_pj",
//               id: "clientepj",
//             },
//             data: {
//               fields,
//               rows,
//             },
//           },
//           options: {
//             centerMap: true,
//             readOnly: false,
//           },
//           config: {
//             mapStyle: { styleType: "dark" },
//           },
//         })
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getClientesPJ();
//   }, []);
// }

export default Map;
