import React, { useState } from 'react';

const FormToExcel = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        date: '',
        batch: '',
        startNumber: '',
        place: '',
        firstName: '',
        lastName: '',
        sex: '',
        class: '',
        age: '',
        parentName: '',
        schoolName: '',
        schoolCode: '',
        street: '',
        city: '',
        zip: '',
        email: '',
        mobileNumber: '',
        sportOne: '',
        sportsIDOne: '',
        sportTwo: '',
        sportsIdTwo: '',
        eventId: '',
        run: '',
        jump: '',
        oneLegStanding: '',
        basketBallThrow: '',
        bendForward: '',
        sprint: '',
        vault: '',
        flagCapturing: '',
        height: '',
        weight: '',

    });

    const [isBelowTwelve, setIsBelowTwelve] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.toUpperCase()
        });
        if (formData.age <= 12) {
            setIsBelowTwelve(!isBelowTwelve)
        }
    };


    console.log(isBelowTwelve, "boolean")

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Send data to parent component
        setFormData({
            date: '',
            batch: '',
            startNumber: '',
            place: '',
            firstName: '',
            lastName: '',
            sex: '',
            class: '',
            age: '',
            parentName: '',
            schoolName: '',
            schoolCode: '',
            street: '',
            city: '',
            zip: '',
            email: '',
            mobileNumber: '',
            sportOne: '',
            sportsIDOne: '',
            sportTwo: '',
            sportsIdTwo: '',
            eventId: '',
            run: '',
            jump: '',
            oneLegStanding: '',
            basketBallThrow: '',
            bendForward: '',
            sprint: '',
            vault: '',
            flagCapturing: '',
            height: '',
            weight: '',

        });
    };

    return (

        <div className='p-4'>
            <form onSubmit={handleSubmit} className="w-full max-w-lg border-2 border-slate-500 rounded-md p-4">
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Start Number
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="12345"
                            name="startNumber"
                            value={formData.startNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-zip">
                            Batch
                        </label>
                        <select id="batch" name="batch" onSelect={(e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Batch</option>
                            <option value="Batch No.1" >Batch No 1</option>
                            <option value="Batch No.2" >Batch No 2</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-zip">
                            Place
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="BHOPAL"
                            name="place"
                            value={formData.place}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-zip">
                            Date
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="09/09/2024"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-city">
                            sex (M/F)
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="MALE"
                            name="sex"
                            value={formData.sex}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-zip">
                            Class (5th to 8th)
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="5"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-zip">
                            age
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="10"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name">
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-student-id"
                            type="text"
                            placeholder="JOHN"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Surname
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="DOE"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Guardian Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="John Doe"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            School Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="John Doe"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            School Code
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="John Doe"
                            name="schoolCode"
                            value={formData.schoolCode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className=" w-full md:mb-0">
                        <label
                            className="block uppercase px-3 tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name">
                            Address
                        </label>
                        <div className='flex'>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-zip">
                                    STREET
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-zip"
                                    type="text"
                                    placeholder="BHOPAL"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-zip">
                                    city
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-zip"
                                    type="text"
                                    placeholder="BHOPAL"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-zip">
                                    Zip
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-zip"
                                    type="text"
                                    placeholder="462026"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="John Doe"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name">
                            Event Id
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-student-id"
                            type="text"
                            placeholder="01"
                            name="eventId"
                            value={formData.eventId}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Mobile No.
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="0010020036"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name">
                            1st Favourite Sports
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-student-id"
                            type="text"
                            placeholder="CRICKET"
                            name="sportOne"
                            value={formData.sportOne}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            1St Sports Id
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="01"
                            name="sportsIDOne"
                            value={formData.sportsIDOne}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name">
                            2nd Favourite Sports
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-student-id"
                            type="text"
                            placeholder="VOLLEY BALL"
                            name="sportTwo"
                            value={formData.sportTwo}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            2nd Sports Id
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="01"
                            name="sportsIdTwo"
                            value={formData.sportsIdTwo}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {formData.age <= 12 ?

                    <div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className=" w-full md:mb-0">
                                <label
                                    className="block uppercase px-3 tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name">
                                    500 M Run (Below 12)
                                </label>
                                <div className='flex'>
                                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-first-name">
                                            Mins. & Secs.
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-student-id"
                                            type="text"
                                            placeholder="1.02"
                                            name="run"
                                            value={formData.run}
                                            onChange={handleChange} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password">
                                    Single Jump (Below 12)
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="text"
                                    placeholder="John Doe"
                                    name="jump"
                                    value={formData.jump}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className=" w-full md:mb-0">
                                <label
                                    className="block uppercase px-3 tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name">
                                    1000 M Run (Above 12)
                                </label>
                                <div className='flex'>
                                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-first-name">
                                            Mins. & Secs
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-student-id"
                                            type="text"
                                            placeholder="1.02"
                                            name="run"
                                            value={formData.run}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password">
                                    Triple Jump (Abobe 12)
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-password"
                                    type="text"
                                    placeholder="John Doe"
                                    name="jump"
                                    value={formData.jump}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                }





                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            One Leg Standing (0-60 secs.)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="30"
                            name="oneLegStanding"
                            value={formData.oneLegStanding}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            BasketBall Throw (150-1500 cm)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="700"
                            name="basketBallThrow"
                            value={formData.basketBallThrow}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Bend Forward (10-70 cm)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="50"
                            name="bendForward"
                            value={formData.bendForward}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            30 M Sprint (3-18 secs.)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="12"
                            name="sprint"
                            value={formData.sprint}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Vault/Stick Test (10-180 secs.)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="120"
                            name="vault"
                            value={formData.vault}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name">
                            Height (cm)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-student-id"
                            type="text"
                            placeholder="30"
                            name="height"
                            value={formData.height}
                            onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Weight (kg)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="40"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Flag Capturing
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="John Doe"
                            name="flagCapturing"
                            value={formData.flagCapturing}
                            onChange={handleChange}
                        />
                    </div>
                </div>


                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className='w-full flex mt-6  justify-center'>
                        <input type="submit" value="send"
                            className='bg-violet-500 shadow-xl hover:shadow-none duration-300 w-1/2 py-2 rounded-md text-white  text-xl cursor-pointer  active:bg-violet-600' />
                    </div>
                </div>
            </form>
        </div>

    );
};

export default FormToExcel;

{
    /*
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Save to Excel</button>
    </form>
    */
}
