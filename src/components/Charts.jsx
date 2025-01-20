import { Grid } from "@mui/material";
import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";



const dataFormatter = (number) =>
  `€ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);


  const salesUpdatedData= sales.map((item)=>(

    {
        date:new Date(item.createdAt).toLocaleString(),
        amount:item.amount
    }   

  ))


  const purchaseUpdatedData= purchases.map((item)=>(

    {
        date:new Date(item.createdAt).toLocaleString(),
        amount:item.amount
    }   

  ))


  return (
    <Grid container spacing={2} mt={4} justifyContent="center" alignItems="center"  flexWrap="wrap">
      <Grid item sx={12} md={6}>
        <AreaChart
          className="h-80"
          data={salesUpdatedData}
          index="date"
          categories={["amount"]}
          colors={["red"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
          style={{ border:"1px solid #dddd", borderRadius:"10px" ,width:"80%",padding:"1rem" }}
        />
      </Grid>
      <Grid item sx={12} md={6}>
        <AreaChart
          className="h-80"
          data={purchaseUpdatedData}
          index="date"
          categories={["amount"]}
          colors={["indigo"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
          style={{ border:"1px solid #dddd", borderRadius:"10px" ,width:"80%",padding:"1rem" }}
        />
      </Grid>
    </Grid>
  );
}
