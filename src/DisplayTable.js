import React from "react"


class DisplayTable extends React.Component{

    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.callAPI=this.callAPI.bind(this)
        this.callAPI()
    }
    callAPI(){
        fetch("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03").then((Response)=>Response.json()).then(
            (data)=>{
                console.log(data)
                this.setState({
                    list:data.data
                })
            }
        )
    }
    
    render(){
        let tb_data=this.state.list.map((item)=>{
            return (
                <tr key={item.requests}>
                    <td>{item.app_id}</td>
                    <td>{item.clicks}</td>
                    <td>{item.date}</td>
                    <td>{item.impressions}</td>
                    <td>{item.requests}</td>
                    <td>{item.responses}</td>
                    <td>{item.revenue}</td>
                </tr>
                
            )
        })
        return (
            <div>
                <table>
                    <thead>
                        <th>App Id</th>
                        <th>Clicks</th>
                        <th>Date</th>
                        <th>Impressions</th>
                        <th>Requests</th>
                        <th>Responses</th>
                        <th>Revenue</th>
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DisplayTable;