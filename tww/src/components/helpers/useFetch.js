import { useEffect, useState } from "react";
import axios from 'axios'

export const useFetch = (url, count) => {
  useEffect(() => {
    // setState(state => ({ data: state.data, loading: true }));
    axios.get(`${url}`) .then ( response => {
      console.log(state)
      setState({ posts: response.data, loading: false });
    })
  }, [count]);

  return state;
};
