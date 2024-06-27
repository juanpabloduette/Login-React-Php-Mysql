// import DataTable from 'datatables.net-dt';
// Asegúrate de importar React y otros hooks necesarios.
import React, { useEffect } from 'react';
// Importa jQuery y DataTables.
import $ from 'jquery';
// import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt';


const Datatable = () => {
    // let table = new DataTable('#myTable');
    useEffect(() => {
        // Inicializa DataTables cuando el componente se monta.
        $(function() {
            $('#myTable').DataTable();
        });
      }, []);
  
    return (
        <table id="myTable" className="display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
          </tr>
          {/* Añade más filas según sea necesario */}
        </tbody>
      </table>
  )
}

export default Datatable