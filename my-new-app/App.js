//import logo from './logo.svg';
import './App.css';

function App() {
 

return (
  <div className="App">
  <table>
			<caption>
			  Table of Different Monkeys
			</caption>
			<thead>
			  <tr>
				<th scope="col">Person</th>
				<th scope="col">Most interest in</th>
				<th scope="col">Age</th>
        <th scope="col"></th>
        
			  </tr>
			</thead>
			<tbody>
			  <tr>
				<th scope="row">Lion-tailed M</th>
				<td>HTML tables</td>
				<td>19</td>
			  </tr>
			  <tr>
				<th scope="row">Biruk</th>
				<td>Web accessibility</td>
				<td>18</td>
			  </tr>
			  <tr>
				<th scope="row">Sam</th>
				<td>JavaScript frameworks</td>
				<td>19</td>
			  </tr>
			  <tr>
				<th scope="row">Yosef</th>
				<td>Web performance</td>
				<td>19</td>
			  </tr>
			</tbody>
			<tfoot>
			  <tr>
				<th scope="row" colspan="2">Average age</th>
				<td>19</td>
			  </tr>
			</tfoot>
		  </table>
  </div>
  
);
  
}

export default App;