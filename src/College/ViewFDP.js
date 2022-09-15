import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Table,
    UncontrolledDropdown,
    Card,
    CardBody,
    CardTitle,
} from "reactstrap"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import ModeSharpIcon from '@mui/icons-material/ModeSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteModal from './DeleteModal'



const ViewFDP = () => {
    const [project, setProject] = useState(null)
    const [modal, setModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [menu, setMenu] = useState({
        id: null,
        open: false
    });


    // //delete order
    const [deleteModal, setDeleteModal] = useState(false)

    const [id, setId] = useState(null)

    const [details, setDetails] = useState([
        { id: "1", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "2", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "3", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "4", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "5", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "6", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "7", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "8", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "9", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "10", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "11", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },
        { id: "12", name: "Gopal Babu", type: "Online", fdpname: "AKTU Level-1 (UHV-II)", start: "9/12/2022", end: "10/12/2022", certificate: "2000270130065", incentive: "AKTU 15000" },

    ])

    return (
        <React.Fragment>
            <DeleteModal
                show={deleteModal} setShow={setDeleteModal} id={id}
            />
            <div className="w-100 h-100 pb-3">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <CardTitle className="py-2">
                        <h4 className="font-size-20 mx-3">View FDP</h4>
                    </CardTitle>
                    <Card>
                        <CardBody>
                            <div className="table-responsive">
                                <Table className="table" style={{ height: "90vh" }}>
                                    <thead className="table-light">
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">FDP Type</th>
                                            <th className="text-center">FDP Name</th>
                                            <th className="text-center">Start Date</th>
                                            <th className="text-center">End Date</th>
                                            <th className="text-center">Certificate Number</th>
                                            <th className="text-center">Incentive Detail</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            details.map((item) => (
                                                <>
                                                    <tr>
                                                        <td className="text-center">{item.id}</td>
                                                        <td className="text-center"> {item.name} </td>
                                                        <td className="text-center"> {item.type} </td>
                                                        <td className="text-center"> {item.fdpname} </td>
                                                        <td className="text-center"> {item.start} </td>
                                                        <td className="text-center"> {item.end} </td>
                                                        <td className="text-center"> {item.certificate} </td>
                                                        <td className="text-center"> {item.incentive} </td>
                                                        <td className="text-center">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle href="#" className="card-drop" tag="i">
                                                                    <div className="align-middle me-1">
                                                                        <MoreVertIcon />
                                                                    </div>
                                                                </DropdownToggle>
                                                                <DropdownMenu className="dropdown-menu-end">
                                                                    <Link to={`/view`} style={{ textDecoration: "none" }} >
                                                                        <DropdownItem>
                                                                            {" "}
                                                                            <div className="align-middle me-1">
                                                                                <RemoveRedEyeSharpIcon color="success" />{" "}&ensp; {("View")}{" "}
                                                                            </div>
                                                                        </DropdownItem>
                                                                    </Link>
                                                                    <DropdownItem divider />
                                                                    <Link to={`/view`} style={{ textDecoration: "none" }} >
                                                                        <DropdownItem>
                                                                            {" "}
                                                                            <ModeSharpIcon sx={{ color: "blue" }} />{" "}&ensp;
                                                                            {("Edit")}{" "}
                                                                        </DropdownItem>
                                                                    </Link>
                                                                    <DropdownItem divider />
                                                                    <DropdownItem tag="button" onClick={() => {
                                                                        setDeleteModal(true);
                                                                        setId(item.id)
                                                                    }}>
                                                                        {" "}
                                                                        <DeleteIcon sx={{ color: "red" }} />{" "}&ensp;
                                                                        {("Delete")}{" "}
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment >
    )
}

export default ViewFDP

// export default OperationsDashboard;
