import { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export function Setores() {
  const [setores, setSetores] = useState([]);

  const geoApiQuery = {
    bottomLeft: {
      lat: -9.685537076307735,
      lng: -35.75397491455079,
    },
    topRight: {
      lat: -9.64593854877609,
      lng: -35.71024417877198,
    },
  };

  const getSetores = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/setores/obter_setores",
        geoApiQuery,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      setSetores(response.data.SETORES);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSetores();
  }, []);
}
