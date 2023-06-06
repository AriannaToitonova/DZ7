
import {useState} from "react";
import {useForm} from "react-hook-form";

export   function App(){
    const {register , handleSubmit} = useForm()
    const [data , setData] = useState("")

    return(
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <input
                {...register("Last name")}
                placeholder="Last name"/>
            <input
                {...register("First name")}
                placeholder="First name"/>
            <input
                {...register("Father name")}
                placeholder="Father name"/>
            <select {...register("Year of birth" , {required:true})}>
                <option value="">Year of birth</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
            </select>
            <select {...register("gender" , {required:true})}>
                <option value="">Select gender...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <p>{data}</p>
            <input type="submit"/>
        </form>
    )
}

