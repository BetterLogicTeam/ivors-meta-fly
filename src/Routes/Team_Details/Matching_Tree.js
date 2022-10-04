import React, { useEffect, useState } from "react";
import { PagePath } from "../../Components";
import user3red from '../../assets/tree/tree_red.png'
import treeimg1 from '../../assets/treeimg1new.png'
import Default from '../../assets/tree/tree_black.png'
import treeimg2 from '../../assets/treeimg2new.png'
import Active from '../../assets/tree/tree_green.png'
import './Matching-tree.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import treeimg from '../../assets/treeimgnew.png'
import { API } from '../../Redux/actions/API'
import { ListItemSecondaryAction } from "@material-ui/core";
import { Link } from "react-router-dom";
let mouseStatus = 'out';
let mouseEnterNext = false;
var bol = true;
const Matching_Tree = () => {
    const user = localStorage?.getItem("user");

    const [Idnumer, setIdnumer] = useState(user)
    const [arrValue, setArrValue] = useState([])
    const [getValue, setgetValue] = useState("")



    const [userdata, setuserdata] = useState(
        [
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '0',
                right_business: '',
                Sponsor: ''

            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                Activation_date : '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: '',
                Sponsor: ''
            },
        ]

    )


    const handleClick = event => {
        event.preventDefault();
    
        // 👇️ value of input field
        console.log('handleClick 👉️', Idnumer);
      };

   
    const handleChange = event => {
        setgetValue(event.target.value);
    
        console.log('value is:', event.target.value);
      };

    const referral_API = async () => {
        try {

            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;
            // let status = ress?.status


            let responce = await API?.post('/binary_tree', {
                "uid": Idnumer,
                "usersession_uid": "1"
            })
            responce = responce?.data?.data?.recordset;

            setuserdata([
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '0',
                    right_business: '',
                    Sponsor: ''

                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
                {
                    name: '',
                    id: '',
                    registration_date: '',
                    status: '',
                    total_left: '',
                    total_left_active: '',
                    left_business: '',
                    package_amount: '',
                    Activation_date : '',
                    package: '',
                    total_right: '',
                    total_right_active: '',
                    right_business: '',
                    Sponsor: ''
                },
            ])
            console.log("Res_API", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    name: item.fname,
                    id: item.uid,
                    registration_date: item?.activationdate,
                    status: item.activationdate  ? 'Active' : 'InActive',
                    total_left: item.left_count,
                    total_left_active: item.totalleft,
                    left_business: item.lbv,
                    package_amount: item.packageamount,
                    Activation_date : item.activationdate,
                    package: item.package,
                    total_right: item.right_count,
                    total_right_active: item.totalright,
                    right_business: item.rbv,
                    Sponsor: item.sid
                    // date: item?.dd
                });



            }
            )
            console.log("responce", arr);


            setuserdata(arr)
            if (bol) {
                setArrValue([...arrValue, arr[0].id])
                bol = false;
            }




        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }

    const onhover = (x) => {
       
        let team_info_div_data = document.querySelectorAll('.team-info p')

        let team_info_div = document.querySelector('.team-info');

        let user_img = document.querySelectorAll('.user-img');
        let Sponsor = document.querySelector('.Sponsor');
        console.log("Data", userdata[x].Sponsor);
        team_info_div_data[0].innerHTML = 'Registration Date : ';
        team_info_div_data[1].innerHTML = 'Status : ';
        team_info_div_data[2].innerHTML = 'Total Left : ';
        team_info_div_data[3].innerHTML = 'Total Left Active : ';
        team_info_div_data[4].innerHTML = 'Left Business : ';
        team_info_div_data[5].innerHTML = 'Package Amount : ';
        team_info_div_data[6].innerHTML = 'Activation Date : ';
        team_info_div_data[7].innerHTML = 'Package : ';
        team_info_div_data[8].innerHTML = 'Total Right : ';
        team_info_div_data[9].innerHTML = 'Total Right Active : ';
        team_info_div_data[10].innerHTML = 'Right Business : ';
        Sponsor.innerHTML = "Sponsor : ";
        team_info_div_data[0].innerHTML += userdata[x].registration_date;
        team_info_div_data[1].innerHTML += userdata[x].status;
        team_info_div_data[2].innerHTML += userdata[x].total_left;
        team_info_div_data[3].innerHTML += userdata[x].total_left_active;
        team_info_div_data[4].innerHTML += userdata[x].left_business;
        team_info_div_data[5].innerHTML += userdata[x].package_amount;
        team_info_div_data[6].innerHTML += userdata[x].Activation_date ;
        team_info_div_data[7].innerHTML += userdata[x].package;
        team_info_div_data[8].innerHTML += userdata[x].total_right;
        team_info_div_data[9].innerHTML += userdata[x].total_right_active;
        team_info_div_data[10].innerHTML += userdata[x].right_business;
        Sponsor.innerHTML += userdata[x].Sponsor;

        team_info_div.classList.remove('d-none');
        team_info_div.setAttribute('style', `top:${user_img[x].getBoundingClientRect().top + 50}px; left:${(user_img[x].getBoundingClientRect().x + (user_img[x].getBoundingClientRect().width / 2)) - (team_info_div.getBoundingClientRect().width / 2)}px !important ;`);
    }
    const onhoverout = () => {
        if (mouseStatus == 'out') {
            let team_info_div_data = document.querySelectorAll('.team-info p')
            let Sponsor = document.querySelector('.Sponsor');
            let team_info_div = document.querySelector('.team-info');


            team_info_div_data[0].innerHTML = 'Registration Date :';
            team_info_div_data[1].innerHTML = 'Status :';
            team_info_div_data[2].innerHTML = 'Total Left :';
            team_info_div_data[3].innerHTML = 'Total Left Active :';
            team_info_div_data[4].innerHTML = 'Left Business :';
            team_info_div_data[5].innerHTML = 'Package Amount :';
            team_info_div_data[6].innerHTML = 'Activation Date: ';
            team_info_div_data[7].innerHTML = 'Package : ';
            team_info_div_data[8].innerHTML = 'Total Right : ';
            team_info_div_data[9].innerHTML = 'Total Right Active : ';
            team_info_div_data[10].innerHTML = 'Right Business : ';
            team_info_div.classList.add('d-none');
            Sponsor.innerHTML = "Sponsor : ";

        }
    }
    useEffect(() => {
        referral_API()
        let idinput = document.querySelector('.idinput')
        idinput.value = Idnumer;

    }, [Idnumer])

    function addValue(value) {
        setArrValue([...arrValue, value])
        // arrValue.push(value)
        // arrValue.push(value)
    }
    console.log('what is arrValue', arrValue)



    var a;
    function popoutvalue() {
        if (arrValue.length == 1) {
            arrValue.pop()
            arrValue.unshift('778899')
            bol = true;
        } else {
            a = arrValue.splice(arrValue.length - 2, 1);
            setIdnumer(a[0]);
            console.log('what is popout value', a[0])
        }

    }

    console.log("userdata", userdata);
    
    return (
        <div className="row justify-content-center" style={{ height: "120vh" }}>
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Matching Tree", page_path: "Team Details / Matching Tree" }} />
                <div className="col-12 row justify-content-center py-5" style={{ overflowY: "hidden" }}>
                    
                    <div className="col-lg-6">
                        <div class="tree_icon" style={{display:'block'}}>
                            <input type="text" className="p-2 my-2 mx-3 profile-border col-10 col-md-10 col-lg-4 col-xl-6 idinput" style={{ width: "92%"}} defaultValue={Idnumer} onChange={(e)=>setgetValue(e.target.value)} />
 <br />
                            <button className="btn btn-success btn-tree" onClick={()=>setIdnumer(getValue)}>Submit</button>
                            <button className=" btn btn-danger btn-tree" onClick={popoutvalue}>Go Back</button>
                            <button className=" btn btn-danger btn-tree" ><Link to="/dashboard" className="btn_home">Home</Link></button>


                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="tree_icon py-4">
                            <div class="tree_name">
                                <img src={Active} width="40px" height="40px" />
                                Active
                            </div>
                            <div class="tree_name">
                                <img src={user3red} width="40px" height="40px" />
                                In-Active
                            </div>
                            <div class="tree_name">
                                <img src={Default} width="40px" height="40px" />
                                Not Registered
                            </div>
                        </div>

                    </div>
                    <div className="tree container align-items-center d-flex mt-5 flex-column text-white text-center">

                        {userdata[0].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                            onhover(0)
                            mouseStatus = 'in'
                        }} onMouseLeave={() => {
                            mouseStatus = 'out'
                            setTimeout(() => { onhoverout() }, 150)
                        }} onClick={() => (setIdnumer(userdata[0].id), addValue(userdata[0].id))} />) : userdata[0].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                            onhover(0)
                            mouseStatus = 'in'
                        }} onMouseLeave={() => {
                            mouseStatus = 'out'
                            setTimeout(() => { onhoverout() }, 150)
                        }} onClick={() => (setIdnumer(userdata[0].id), addValue(userdata[0].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                            onhover(0)
                            mouseStatus = 'in'
                        }} onMouseLeave={() => {
                            mouseStatus = 'out'
                            setTimeout(() => { onhoverout() }, 150)
                        }} onClick={() => (setIdnumer(userdata[0].id), addValue(userdata[0].id))} />)}


                        <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[0].name}</p>
                        <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[0].id}</p>
                        <img src={treeimg} className="treeimg" />
                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column ">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[1].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(1)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[1].id), addValue(userdata[1].id))} />) : userdata[1].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(1)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[1].id), addValue(userdata[1].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(1)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[1].id), addValue(userdata[1].id))} />)}



                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[1].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[1].id}</p>
                                <img src={treeimg1} className="treeimg1" />
                            </div>
                            <div style={{ width: '170px' }} className="gap-img-1">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[2].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(2)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[2].id), addValue(userdata[2].id))} />) : userdata[2].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(2)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[2].id), addValue(userdata[2].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(2)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[2].id), addValue(userdata[2].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[2].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[2].id}</p>
                                <img src={treeimg1} className="treeimg1" />
                            </div>
                        </div>


                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={Default} className="user-img" /> */}
                                {userdata[3].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(3)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[3].id), addValue(userdata[3].id))} />) : userdata[3].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(3)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[3].id), addValue(userdata[3].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(3)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[3].id), addValue(userdata[3].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[3].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[3].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[4].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(4)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[4].id), addValue(userdata[4].id))} />) : userdata[4].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(4)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[4].id), addValue(userdata[4].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(4)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[4].id), addValue(userdata[4].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[4].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[4].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[5].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(5)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[5].id), addValue(userdata[5].id))} />) : userdata[5].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(5)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[5].id), addValue(userdata[5].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(5)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[5].id), addValue(userdata[5].id))} />)}
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[5].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[5].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                            <div style={{ width: '70px' }} className="gap-img-2" >
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[6].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(6)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[6].id), addValue(userdata[6].id))} />) : userdata[6].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(6)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[6].id), addValue(userdata[6].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(6)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[6].id), addValue(userdata[6].id))} />)}

                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[6].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[6].id}</p>
                                <img src={treeimg2} className="treeimg2" />
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}

                                {userdata[7].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(7)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[7].id), addValue(userdata[7].id))} />) : userdata[7].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(7)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[7].id), addValue(userdata[7].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(7)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[7].id), addValue(userdata[7].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[7].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[7].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[8].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(8)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[8].id), addValue(userdata[8].id))} />) : userdata[8].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(8)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[8].id), addValue(userdata[8].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(8)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[8].id), addValue(userdata[8].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[8].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[8].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {/* {userdata[9].name !=="" ?(<img src={user3red} className="user-img" />):(<img src={Default} className="user-img" />)}  */}
                                {userdata[9].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(9)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[9].id), addValue(userdata[9].id))} />) : userdata[9].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(9)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[9].id), addValue(userdata[9].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(9)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[9].id), addValue(userdata[9].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[9].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[9].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[10].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(10)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[10].id), addValue(userdata[10].id))} />) : userdata[10].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(10)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[10].id), addValue(userdata[10].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(10)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[10].id), addValue(userdata[10].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[10].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[10].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[11].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(11)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[11].id), addValue(userdata[11].id))} />) : userdata[11].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(11)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[11].id), addValue(userdata[11].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(11)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[11].id), addValue(userdata[11].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[11].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[11].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* <img src={user3red} className="user-img" /> */}
                                {userdata[12].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(12)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[12].id), addValue(userdata[12].id))} />) : userdata[12].name !== "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(12)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[12].id), addValue(userdata[12].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(12)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[12].id), addValue(userdata[12].id))} />)}


                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[12].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[12].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {/* {userdata[13].name !=="" ?(<img src={user3red} className="user-img" />):(<img src={Default} className="user-img" />)}  */}
                                {userdata[13].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(13)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[13].id), addValue(userdata[13].id))} />) : userdata[13].name != "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(13)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[13].id), addValue(userdata[13].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(13)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[13].id), addValue(userdata[13].id))} />)}


                                {console.log("userdata[13]", userdata[14].name)}
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[13].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[13].id}</p>
                            </div>
                            <div style={{ width: '50px' }} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">
                                {userdata[14].package >= 1 ? (<img src={Active} className="user-img" onMouseEnter={() => {
                                    onhover(14)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[14].id), addValue(userdata[14].id))} />) : userdata[14].name != "" ? (<img src={user3red} className="user-img" onMouseEnter={() => {
                                    onhover(14)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[14].id), addValue(userdata[14].id))} />) : (<img src={Default} className="user-img" onMouseEnter={() => {
                                    onhover(14)
                                    mouseStatus = 'in'
                                }} onMouseLeave={() => {
                                    mouseStatus = 'out'
                                    setTimeout(() => { onhoverout() }, 150)
                                }} onClick={() => (setIdnumer(userdata[14].id), addValue(userdata[14].id))} />)}


                                {console.log("userdata[13]", userdata[14].name)}
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[14].name}</p>
                                <p className="m-0 p-0 " style={{ color: "rgb(0 0 0 / 85%)" }}>{userdata[14].id}</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-info d-none position-absolute text-white col-10 col-lg-6 col-md-7 col-xl-4 col-xxl-3 px-2 py-3 br-1" onMouseEnter={() => { mouseStatus = 'in' }} onMouseLeave={() => {
                        mouseStatus = 'out'
                        onhoverout()
                    }}   >
                        <h6 className="border_bottom m-0 Sponsor">Sponsor:</h6>
                        <div className="d-flex flex-row justify-content-between align-items-start">
                            <div className="d-flex flex-column pt-2 align-items-start justify-content-start" style={{ width: '50%' }}>
                                <p className="bg-b m-0 p-1">Registration Date : </p>
                                <p className=" m-0 p-1">Status : </p>
                                <p className="bg-b m-0 p-1">Total Left : </p>
                                <p className=" m-0 p-1">Total Left Active : </p>
                                <p className="bg-b m-0 p-1">Left Business : </p>
                                <p className=" m-0 p-1">Package Amount : </p>
                            </div>
                            <div className="d-flex flex-column pt-2 align-items-start border_start justify-content-start" style={{ width: '50%' }}>
                                <p className="bg-b m-0 p-1">Activation Date : </p>
                                <p className=" m-0 p-1">Package : </p>
                                <p className="bg-b m-0 p-1">Total Right : </p>
                                <p className=" m-0 p-1">Total Right Active : </p>
                                <p className="bg-b m-0 p-1">Right Business : </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Matching_Tree;