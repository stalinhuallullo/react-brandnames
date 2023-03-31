import React, { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

import { BrandAdd } from '../components/BrandAdd';
import { BrandList } from '../components/BrandList';
import { BrandChart } from '../components/BrandChart';


export const HomePage = () => {
  const { socket, online } = useContext( SocketContext );


  return (
    <div className="container">
        
        <div className="alert">
          <p>
            Service status: 
            {
              online
                ? <span className="text-success"> Online</span>
                : <span className="text-danger"> Offline</span>
            }
           
          </p>
        </div>


        <h1>BrandNames</h1>
        <hr />

        <div className="row">
            <div className="col">
              <BrandChart />
            </div>
        </div>


        <div className="row">
          <div className="col-8">
            <BrandList />
          </div>

          <div className="col-4">
            <BrandAdd />
          </div>
        </div>



    </div>
  );
}

