import '../LoginForm.css';
import { useForm } from 'react-hook-form';

export function CreateModel() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let url = "https://localhost:7181/api/Models"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem("loginToken"),
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                if (!response.ok) {
                    response.json().then(json => {
                        alert(json);
                    });
                }
                else {
                    return response.json();
                }
            })
            .then(
                (result) => {
                    if (result != null) {
                        window.location.replace("/");
                    }
                },
                (error) => {
                    alert("Error: " + error)
                }
            )
    };

    return (
        <div className="react-hooks-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="´firstname">First Name</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("firstname")}
                    />
                </div>

                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("lastname")} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder=""
                        type="email"
                        {...register("email")} />
                </div>

                <div>
                    <label htmlFor="phoneno">Phone Number</label>
                    <input
                        placeholder=""
                        type="number"
                        {...register("phoneno")} />
                </div>

                <div>
                    <label htmlFor="addresline1">Address 1</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("addresline1")} />
                </div>

                <div>
                    <label htmlFor="addresline2">Address 2</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("addresline2")} />
                </div>

                <div>
                    <label htmlFor="zip">Zip</label>
                    <input
                        placeholder=""
                        type="number"
                        {...register("zip")} />
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("city")} />
                </div>

                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("country")} />
                </div>

                <div>
                    <label htmlFor="birthday">Birthday</label>
                    <input
                        placeholder=""
                        type="date"
                        {...register("birthday")} />
                </div>

                <div>
                    <label htmlFor="nationality">Nationality</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("nationality")} />
                </div>

                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("height")} />
                </div>

                <div>
                    <label htmlFor="shoesize">Shoesize</label>
                    <input
                        placeholder=""
                        type="number"
                        {...register("shoesize")} />
                </div>

                <div>
                    <label htmlFor="haircolor">Haircolor</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("haircolor")} />
                </div>

                <div>
                    <label htmlFor="eyecolor">Eyecolor</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("eyecolor")} />
                </div>

                <div>
                    <label htmlFor="comments">Comments</label>
                    <input
                        placeholder=""
                        type="text"
                        {...register("comments")} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder=""
                        type="password"
                        {...register("password")} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}