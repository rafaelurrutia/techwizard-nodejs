<!--
<div id="filter" style="margin: 15px auto" align="center">
	<strong>Filtrar por año: </strong> 
	<button class="mini inverse">2011</button>
	<button class="mini inverse">2012</button>
	<button class="mini inverse">2013</button>
	<button class="mini danger">2014</button>
</div>
-->
<div id="container" style="min-width: 310px; height: 450px; margin: 15px auto"></div>
<div align="center">
<!--
<table class="tableModal tableModalExtensorCertificate" style="font-size:12px; width:465px; background-color: inherit; margin-top: 10px; margin-bottom: 10px;">
	<thead>
		<tr class="fg-white bg-darkRed">
			<th style="background-color: #DFDFDF;"><strong></strong></th>
			<th><strong>Con extensores</strong></th>
			<th><strong>Sin extensores</strong></th>
			<th><strong>Total</strong></th>
		</tr>
	</thead>
	<tbody align="center">
		<tr id="withExtensor">
			<td class="fg-white bg-darkRed"><strong>Cantidad</strong></td>
			<td>80</td>
			<td>120</td>
			<td>200</td>
		</tr>
		<tr>
			<td class="fg-white bg-darkRed"><strong>Porcentaje</strong></td>
			<td>40%</td>
			<td>60%</td>
			<td>100%</td>
		</tr>
	</tbody>
</table>
-->
<table class="tableModal tableModalExtensorCertificate" style="font-size:12px; width:465px; background-color: inherit; margin-top: 10px; margin-bottom: 10px;">
	<thead>
		<tr class="fg-white bg-black">
			<th style="background-color: #DFDFDF;"><strong></strong></th>
			<th><strong>{{certificateWithExtensorsQuantity}}</strong></th>
			<th><strong>{{certificateWithExtensorsPercentage}}</strong></th>
		</tr>
	</thead>
	<tbody align="center">
		<tr id="withExtensor">
			<td class="fg-white bg-black"><strong>{{certificateWithExtensorsWithExtensor}}</strong></td>
			<td id="qwe"></td>
			<td id="pwe"></td>
		</tr>
		<tr id="withoutExtensor">
			<td class="fg-white bg-black"><strong>{{certificateWithExtensorsWithoutExtensor}}</strong></td>
			<td id="qwoe"></td>
			<td id="pwoe"></td>		
		</tr>
		<tr>
			<td class="fg-white bg-black"><strong>Total</strong></td>
			<td id="total"></td>
			<td>100%</td>		
		</tr>
	</tbody>
</table>
</div>