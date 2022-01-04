var faker = require('faker');
var fs = require("fs")
faker.locale = 'vi'


// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// console.log("NAME:" + randomName);
// console.log("EMAIL:" + randomEmail);
// console.log(randomCard);



// Employee data
const randomEmployees = (n) =>{
    
    if(n<=0) return []
    const employeeList = []
    for(i = 1 ;i<=n;i++){
        var employee = {
            // id:faker.datatype.uuid(),
            id:i,
            name: faker.name.findName(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber()
        }

        employeeList.push(employee);


    }
    // Thanh vien ban quan ly ktx
    var employee1= {
        id:41,
        name: "Nguyễn Minh Dũng",
        email: "nguyenminhdungtd98@gmail.com",
        phoneNumber: "0763934399"
    }
    // Ke toan
    var employee2= {
        id:42,
        name: "Nguyễn Văn Ký",
        email: "nguyenky@gmail.com",
        phoneNumber: "03428284832"
    }
    // Truong doi 1
    var employee3= {
        id:43,
        name: "Nguyễn Võ Công Toàn",
        email: "congtoan@gmail.com",
        phoneNumber: "0957839282"
    }
    
    // Truong tang 1
    var employee4= {
        id:44,
        name: "Thiên Thảo",
        email: "thienthao@gmail.com",
        phoneNumber: "094883123"
    }
    // Truong tang 2
    var employee5= {
        id:45,
        name: "Vũ Thị Thu Thảo",
        email: "thuthao@gmail.com",
        phoneNumber: "0948843123"
    }
    // Truong tang 3
    var employee6= {
        id:46,
        name: "Nguyễn Duỹ Long",
        email: "duylong@gmail.com",
        phoneNumber: "0948843123"
    }
    // Truong tang tret
    var employee7 = {
        id:47,
        name: "Nguyễn Thanh Tốt",
        email: "thanhtot@gmail.com",
        phoneNumber: "0948843123"
    }
    // Truong doi 2
    var employee8 = {
        id:48,
        name: "Minh Hồ",
        email: "minhho@gmail.com",
        phoneNumber: "091263823"
    }
    employeeList.push(employee1)
    employeeList.push(employee2)
    employeeList.push(employee3)
    employeeList.push(employee4)
    employeeList.push(employee5)
    employeeList.push(employee6)
    employeeList.push(employee7)
    employeeList.push(employee8)
    return employeeList;
};
// Department data
const randomDepartments =(n)=>{
    
    const departments=[]
    const department1 = {
        id:1,
        name:"Ban Quản Lý KTX Cỏ May",
        farther_department_id:0,
        manager_id:0
    }
    const department2 = {
        id:2,
        name:"Bảo trì - Bảo dưỡng CSVC KTX",
        farther_department_id:1,
        manager_id:0
    }
    const department3 = {
        id:3,
        name:"Đội sửa chữa",
        farther_department_id:2,
        manager_id:0
    }
    const department4 = {
        id:4,
        name:"Tầng 1",
        farther_department_id:2,
        manager_id:0
    }
    const department5 = {
        id:5,
        name:"Tầng 2",
        farther_department_id:2,
        manager_id:0
    }
    const department6 = {
        id:6,
        name:"Tầng 3",
        farther_department_id:2,
        manager_id:0
    }
    const department7 = {
        id:7,
        name:"Tầng trệt",
        farther_department_id:2,
        manager_id:0
    }
    const department8 = {
        id:8,
        name:"Kiểm tra và giám sát sinh viên",
        farther_department_id:1,
        manager_id:0
    }
    const department9 = {
        id:9,
        name:"Tổ chức sự kiện",
        farther_department_id:1,
        manager_id:0
    }
    const department10 = {
        id:10,
        name:"Truyền thông",
        farther_department_id:1,
        manager_id:0
    }
    const department11= {
        id:11,
        name:"Sinh viên",
        farther_department_id:1,
        manager_id:0
    }
   
       
        departments.push(department1)
        departments.push(department2)
        departments.push(department3)
        departments.push(department4)
        departments.push(department5)
        departments.push(department6)
        departments.push(department7)
        departments.push(department8)
        departments.push(department9)
        departments.push(department10)
        departments.push(department11)

    return departments;
}
// department_employee data
const randomDepartments_Employees = (departments,employeesList) =>{
    const departments_employees = []
  
    const employeeId = []


    for(const employee of employeesList){
        employeeId.push(employee.id)
    }
    for(const department of departments){
        for(var i = 0;i<10;i++){
            var indexRandom = Math.floor(Math.random() * employeeId.length);
            const department_employee = {
                departmentId:department.id,
                employeeId: employeesList[indexRandom].id
            }
            departments_employees.push(department_employee)
            employeeId.splice(indexRandom,1);
        }

     
    }
    return departments_employees;
}

// Status data
const initStatus = () =>{
    const statuses = []
    const statusList = ["Chờ duyệt","Hoàn tất", "Bị từ chối","Đã huỷ","Mới", "Đang làm","Chờ xác nhận","Hoàn thành","Quá hạn"]
    for(var i =1;i <= statusList.length;i++){
        const status ={
            id:i,
            name:statusList[i]
        }
        statuses.push(status)
    }

    return statuses;
}
// Task data
const randomTasks = (n,statuses,employeeList) =>{
    const tasks = []
    for(var i = 1;i<=n;i++){
        var indexRandomStatus = Math.floor(Math.random() * statuses.length);
        var indexRandomEmpl = Math.floor(Math.random() * employeeList.length);
        const task = {
            id:i,
            title:faker.lorem.words(),
            description:faker.lorem.lines(),
            status:statuses[indexRandomStatus].id,
            creator_id: employeeList[indexRandomEmpl].id 
        }
        tasks.push(task)

    }


    return tasks;
}
// Moi viec giao cho 3 nhan vien ngau nhien
const randomTaskDetails =(employees,tasks)=>{
    const task_details =[]
    // Lay ra ds id nhan vien sau moi lan giao xong 1 viec
    const resetIds = () =>{
        const employeeId = []


        for(const employee of employees){
            employeeId.push(employee.id)
        }
        return employeeId;
    }
    var employeeId = [];
    for(var i=1;i<=tasks.length;i++){

        employeeId = resetIds();
        for(var j=0;j<3;j++){
            var indexRandom = Math.floor(Math.random() * employeeId.length);
            const task_detail = {
                id:i,
                receiver_id:employees[indexRandom].id,
                task_id:tasks[i-1].id
            }
            task_details.push(task_detail)
            employeeId.splice(indexRandom,1);
        }
    }
    return task_details;
   
   
}
const initProposalTypes = () =>{
    const proposal_types =[]
    const type1 = {
        id:1,
        name:"Đăng ký sửa chữa"        
    }
    const type2 = {
        id:2,
        name:"Đề xuất mua hàng"        
    }
    proposal_types.push(type1)
    proposal_types.push(type2)
    return proposal_types;
}
const initDataTypes = () =>{
    const data_types =[]
    const names=["Text","Textarea","Dropdown","Radio","Checkbox","Number","Calculator","Relation","Attachment","Datetime","Repeater","Label"]
    for(var i=1;i<= names.length;i++){
        const data_type={
            id:i,
            name:names[i],
           

        }
        data_types.push(data_type)
    }
    return data_types;
}
//Tao chi tiet loai de xuat
const initProposal_type_details = () =>{    
    const proposal_type_details = []
    // pro1
    const proposal1_1 ={
        id:1,
        proposal_types_id:1,
        field_name: "Mục đích/Lý do",
        data_type_id: 1
    }
    const proposal1_2 ={
        id:2,
        proposal_types_id:1,
        field_name: "Tình trạng hư hỏng",
        data_type_id:2
    }
    const proposal1_3 ={
        id:3,
        proposal_types_id:1,
        field_name: "Số phòng",
        data_type_id: 1
    }
    const proposal1_4 ={
        id:4,
        proposal_types_id:1,
        field_name: "Ghi chú",
        data_type_id: 2
    }
    proposal_type_details.push(proposal1_1)
    proposal_type_details.push(proposal1_2)
    proposal_type_details.push(proposal1_3)
    proposal_type_details.push(proposal1_4)
    //pro2
    const proposal2_1 ={
        id:5,
        proposal_types_id:2,
        field_name: "Mục đích/Lý do",
        data_type_id: 1
    }
    const proposal2_2 ={
        id:6,
        proposal_types_id:2,
        field_name: "Tên vật tư",
        data_type_id: 1
    }
    const proposal2_3 ={
        id:7,
        proposal_types_id:2,
        field_name: "Số lượng",
        data_type_id: 1
    }
    const proposal2_4 ={
        id:8,
        proposal_types_id:2,
        field_name: "Đơn gía",
        data_type_id: 1
    }
    proposal_type_details.push(proposal2_1)
    proposal_type_details.push(proposal2_2)
    proposal_type_details.push(proposal2_3)
    proposal_type_details.push(proposal2_4)
    return proposal_type_details;
}
// Buoc duyet de xuat
const initProposalSteps = ()=>{
    const approval_steps=[]
    // De xuat Dang ky sua chua
    const approval1 ={
        id:1,
        approval_step_name: "Phê duyệt",
        approval_step_index: 1,
        proposal_types_id:1

    }
    approval_steps.push(approval1)
    // De xuat mua hang
    const approval2 ={
        id:2,
        approval_step_name: "Kế toán",
        approval_step_index: 1,
        proposal_types_id:2

    }
    approval_steps.push(approval2)
    return approval_steps;
}
//Chuc vu
const initPositions = () =>{
    const positions = []
    // position BQL
    const positionBanQuanLy1 = {
        id:1,
        name: "Thành viên ban quản lý KTX",
        department_id:1,
        is_manager: "true"
    } 
    const positionBanQuanLy2 = {
        id:2,
        name: "Giám thị",
        department_id:1,
        is_manager: "false"
    } 
    const positionBanQuanLy3 = {
        id:3,
        name: "Kế toán",
        department_id:1,
        is_manager: "false"
    } 
    positions.push(positionBanQuanLy1)
    positions.push(positionBanQuanLy2)
    positions.push(positionBanQuanLy3)
    // position Bao tri
    const positionBaoTri1 = {
        id:4,
        name: "Trưởng đội 1",
        department_id:2,
        is_manager: "true"
    } 
    positions.push(positionBaoTri1)
    // position Doi sua chua
    const positionDoiSuaChua1 = {
        id:5,
        name: "Thành viên",
        department_id:3,
        is_manager: "false"
    } 
    positions.push(positionDoiSuaChua1)
    // position Tang 1
    const positionTang1_1 = {
        id:6,
        name: "Hỗ trợ trưởng tầng",
        department_id:4,
        is_manager: "false"
    } 
    const positionTang1_2 = {
        id:7,
        name: "Trưởng tầng 1",
        department_id:4,
        is_manager: "true"
    }
    const positionTang1_3 = {
        id:8,
        name: "Trưởng phòng sinh viên tầng 1",
        department_id:4,
        is_manager: "false"
    }
    
    positions.push(positionTang1_1)
    positions.push(positionTang1_2)
    positions.push(positionTang1_3)
    //position Tang 2
    const positionTang2_1 = {
        id:9,
        name: "Hỗ trợ trưởng tầng",
        department_id:5,
        is_manager: "false"
    } 
    const positionTang2_2 = {
        id:10,
        name: "Trưởng tầng 2",
        department_id:5,
        is_manager: "true"
    }
    const positionTang2_3 = {
        id:11,
        name: "Trưởng phòng sinh viên tầng 2",
        department_id:5,
        is_manager: "false"
    }
    
    positions.push(positionTang2_1)
    positions.push(positionTang2_2)
    positions.push(positionTang2_3)

    // position Tang 3
    const positionTang3_1 = {
        id:12,
        name: "Hỗ trợ trưởng tầng",
        department_id:6,
        is_manager: "false"
    } 
    const positionTang3_2 = {
        id:13,
        name: "Trưởng tầng 3",
        department_id:6,
        is_manager: "true"
    }
    const positionTang3_3 = {
        id:14,
        name: "Trưởng phòng sinh viên tầng 3",
        department_id:6,
        is_manager: "false"
    }
    
    positions.push(positionTang3_1)
    positions.push(positionTang3_2)
    positions.push(positionTang3_3)
    // position Tang tret
    const positionTangTret_1 = {
        id:15,
        name: "Hỗ trợ trưởng tầng",
        department_id:7,
        is_manager: "false"
    } 
    const positionTangTret_2 = {
        id:16,
        name: "Trưởng tầng trệt",
        department_id:7,
        is_manager: "true"
    }
    const positionTangTret_3 = {
        id:17,
        name: "Trưởng phòng sinh viên tầng trệt",
        department_id:7,
        is_manager: "false"
    }
    positions.push(positionTangTret_1)
    positions.push(positionTangTret_2)
    positions.push(positionTangTret_3)
    // position Doi 2
    const positionDoi2_1 = {
        id:18,
        name: "Thành viên",
        department_id:8,
        is_manager: "false"
    }
    const positionDoi2_2 = {
        id:19,
        name: "Trưởng đội 2",
        department_id:8,
        is_manager: "true"
    }
    positions.push(positionDoi2_1)
    positions.push(positionDoi2_2)
    return positions;
}
// Vai tro
const initRoles = () =>{
    const roles =[]
    const role1 ={
        id:1,
        name: "Điều hành các hoạt động của KTX",
        
    }
    const role2 ={
        id:2,
        name: "Duyệt các đề xuất nghỉ phép của sinh viên",
        
    }
    const role3 ={
        id:3,
        name: "Giải quyết các vấn đề tiền ăn và học phí",
         
    }
    const role4 ={
        id:4,
        name: "Quản lý cơ sở vật chất, an ninh KTX",
        
    }
    const role5 = {
        id:5,
        name: "Sinh viên",
         
    }
    const role6 = {
        id:6,
        name: "Nhận đề xuất và thực hiện sửa chữa hư hỏng cho các phòng",
         
    }
    const role7 = {
        id:7,
        name: "Quản lý, chấm điểm rèn luyện cho SV và điểm danh SV",
    }
    roles.push(role1)
    roles.push(role2)
    roles.push(role3)
    roles.push(role4)
    roles.push(role5)
    roles.push(role6)
    roles.push(role7)
    return roles;
}
// position_roles
const initPositionRoles = () =>{
    const position_roles =[]
    const pr1 = {
        positions_id:1,
        roles_id:1
    }
    const pr2 = {
        positions_id:2,
        roles_id:2
    }
    const pr3 = {
        positions_id:3,
        roles_id:3
    }
    const pr4 = {
        positions_id:4,
        roles_id:4
    }
    const pr5 = {
        positions_id:5,
        roles_id:5
    }
    const pr6 = {
        positions_id:6,
        roles_id:5
    }
    const pr7 = {
        positions_id:7,
        roles_id:6
    }
    const pr8 = {
        positions_id:8,
        roles_id:5
    }
    const pr9 = {
        positions_id:9,
        roles_id:5
    }
    const pr10 = {
        positions_id:10,
        roles_id:6
    }
    const pr11 = {
        positions_id:11,
        roles_id:5
    }
    const pr12 = {
        positions_id:12,
        roles_id:5
    }
    const pr13 = {
        positions_id:13,
        roles_id:6
    }
    const pr14 = {
        positions_id:14,
        roles_id:5
    }
    const pr15 = {
        positions_id:15,
        roles_id:5
    }
    const pr16 = {
        positions_id:16,
        roles_id:6
    }
    const pr17 = {
        positions_id:17,
        roles_id:5
    }
    const pr18 = {
        positions_id:18,
        roles_id:5
    }
    const pr19 = {
        positions_id:19,
        roles_id:7
    }
    position_roles.push(pr1)
    position_roles.push(pr2)
    position_roles.push(pr3)
    position_roles.push(pr4)
    position_roles.push(pr5)
    position_roles.push(pr6)
    position_roles.push(pr7)
    position_roles.push(pr8)
    position_roles.push(pr9)
    position_roles.push(pr10)
    position_roles.push(pr11)
    position_roles.push(pr12)
    position_roles.push(pr13)
    position_roles.push(pr14)
    position_roles.push(pr15)
    position_roles.push(pr16)
    position_roles.push(pr17)
    position_roles.push(pr18)
    position_roles.push(pr19)
    return position_roles;
} 
// option
const initOptions = () =>{
    const options = []
    const option1 ={
        id:1,
        name:"Hợp đồng kinh tế"
    }
    const option2 ={
        id:2,
        name:"Hợp đồng"
    }
    const option3 ={
        id:3,
        name:"Cảnh báo/nhắc nhở"
    }
    const option4 ={
        id:4,
        name:"Thiết bị"
    }
    const option5 ={
        id:5,
        name:"Phụ tùng"
    }
    const option6 ={
        id:6,
        name:"Cảm biến"
    }
    const option7 ={
        id:6,
        name:"Cảm biến"
    }
    const option8 ={
        id:8,
        name:"Cảm biến"
    }
    const option9 ={
        id:9,
        name:"Danh mục"
    }
    const option10 ={
        id:10,
        name:"Danh mục kiểm tra"
    }
    const option11 ={
        id:11,
        name:"Công việc"
    }
    const option12 ={
        id:12,
        name:"Đề xuất"
    }
    const option13 ={
        id:13,
        name:"Loại đề xuất"
    }
    const option14 ={
        id:14,
        name:"Nhân viên"
    }
    const option15 ={
        id:15,
        name:"Phòng ban"
    }
    const option16 ={
        id:16,
        name:"Chức vụ"
    }
    const option17 ={
        id:17,
        name:"Kho"
    }
    const option18 ={
        id:18,
        name:"Vai trò"
    }
    const option19 ={
        id:19,
        name:"Báo cáo"
    }
    const option20 ={
        id:20,
        name:"Khách hàng"
    }
    const option21 ={
        id:21,
        name:"Người dùng"
    }
    const option22 ={
        id:22,
        name:"Chức năng công ty"
    }
    const option23 ={
        id:23,
        name:"Thẻ"
    }
    const option24 ={
        id:24,
        name:"Phân loại khách hàng"
    }
    const option25 ={
        id:25,
        name:"Sản phẩm"
    }
    const option26 ={
        id:26,
        name:"Sản phẩm"
    }
    options.push(option1)
    options.push(option2)
    options.push(option3)
    options.push(option4)
    options.push(option5)
    options.push(option6)
    options.push(option7)
    options.push(option8)
    options.push(option9)
    options.push(option10)
    options.push(option11)
    options.push(option12)
    options.push(option13)
    options.push(option14)
    options.push(option15)
    options.push(option16)
    options.push(option17)
    options.push(option18)
    options.push(option19)
    options.push(option20)
    options.push(option21)
    options.push(option22)
    options.push(option23)
    options.push(option24)
    options.push(option25)
    options.push(option26)
    

    return options;
}
// permissions
const initPermission = () =>{
    const permissions =[]
    const per1 = {
        id:1,
        name:"Xem"
    }
    const per2 = {
        id:2,
        name:"Tạo"
    }
    const per3 = {
        id:3,
        name:"Sửa"
    }
    const per4 = {
        id:4,
        name:"Xoá"
    }
    const per5 = {
        id:5,
        name:"Xem hết"
    }
    const per6 = {
        id:6,
        name:"Sửa hết"
    }
    const per7 = {
        id:7,
        name:"Xoá hết"
    }
    permissions.push(per1)
    permissions.push(per2)
    permissions.push(per3)
    permissions.push(per4)
    permissions.push(per5)
    permissions.push(per6)
    permissions.push(per7)
    return permissions;
}
// Role detail
const initRoleDetails = () =>{  
    const roles_details =[]
    // role Sinh vien
    const role_detail1_1 ={
        id:1,
        role_id:5,
        option_id:11,
        permission_id:1
    }
    const role_detail1_2 ={
        id:2,
        role_id:5,
        option_id:11,
        permission_id:2
    }
    const role_detail1_3 ={
        id:3,
        role_id:5,
        option_id:11,
        permission_id:3
    }
    const role_detail1_4 ={
        id:4,
        role_id:5,
        option_id:11,
        permission_id:4
    }
    const role_detail1_5 ={
        id:5,
        role_id:5,
        option_id:12,
        permission_id:1
    }
    const role_detail1_6 ={
        id:6,
        role_id:5,
        option_id:12,
        permission_id:2
    }
    const role_detail1_7 ={
        id:7,
        role_id:5,
        option_id:12,
        permission_id:3
    }
    const role_detail1_8 ={
        id:8,
        role_id:5,
        option_id:12,
        permission_id:4
    }
    const role_detail1_9 ={
        id:9,
        role_id:5,
        option_id:14,
        permission_id:1
    }
    const role_detail1_10 ={
        id:10,
        role_id:5,
        option_id:15,
        permission_id:1
    }
    roles_details.push(role_detail1_1)
    roles_details.push(role_detail1_2)
    roles_details.push(role_detail1_3)
    roles_details.push(role_detail1_4)
    roles_details.push(role_detail1_5)
    roles_details.push(role_detail1_6)
    roles_details.push(role_detail1_7)
    roles_details.push(role_detail1_8)
    roles_details.push(role_detail1_9)
    roles_details.push(role_detail1_10)
// role Quản lý cơ sở vật chất, an ninh KTX
    const role_detail2_1 ={
        id:11,
        role_id:4,
        option_id:11,
        permission_id:1
    }
    const role_detail2_2 ={
        id:12,
        role_id:4,
        option_id:11,
        permission_id:2
    }
    const role_detail2_3 ={
        id:13,
        role_id:4,
        option_id:11,
        permission_id:3
    }
    const role_detail2_4 ={
        id:14,
        role_id:4,
        option_id:11,
        permission_id:4
    }
    const role_detail2_5 ={
        id:15,
        role_id:4,
        option_id:11,
        permission_id:5
    }
    const role_detail2_6 ={
        id:16,
        role_id:4,
        option_id:11,
        permission_id:6
    }
    const role_detail2_7 ={
        id:17,
        role_id:4,
        option_id:12,
        permission_id:1
    }
    const role_detail2_8 ={
        id:18,
        role_id:4,
        option_id:12,
        permission_id:2
    }
    const role_detail2_9 ={
        id:19,
        role_id:4,
        option_id:12,
        permission_id:3
    }
    const role_detail2_10 ={
        id:20,
        role_id:4,
        option_id:12,
        permission_id:4
    }
    const role_detail2_11 ={
        id:21,
        role_id:4,
        option_id:12,
        permission_id:5
    }
    const role_detail2_12 ={
        id:22,
        role_id:4,
        option_id:12,
        permission_id:6
    }
    const role_detail2_13 ={
        id:23,
        role_id:4,
        option_id:14,
        permission_id:1
    }
    const role_detail2_14 ={
        id:24,
        role_id:4,
        option_id:15,
        permission_id:1
    }
    const role_detail2_15 ={
        id:25,
        role_id:4,
        option_id:16,
        permission_id:1
    }
    roles_details.push(role_detail2_1)
    roles_details.push(role_detail2_2)
    roles_details.push(role_detail2_3)
    roles_details.push(role_detail2_4)
    roles_details.push(role_detail2_5)
    roles_details.push(role_detail2_6)
    roles_details.push(role_detail2_7)
    roles_details.push(role_detail2_8)
    roles_details.push(role_detail2_9)
    roles_details.push(role_detail2_10)
    roles_details.push(role_detail2_11)
    roles_details.push(role_detail2_12)
    roles_details.push(role_detail2_13)
    roles_details.push(role_detail2_14)
    roles_details.push(role_detail2_15)

// role Nhận đề xuất và thực hiện sửa chữa hư hỏng cho các phòng
    const role_detail3_1 ={
        id:26,
        role_id:6,
        option_id:11,
        permission_id:1
    }
    const role_detail3_2 ={
        id:27,
        role_id:6,
        option_id:11,
        permission_id:2
    }
    const role_detail3_3 ={
        id:28,
        role_id:6,
        option_id:11,
        permission_id:3
    }
    const role_detail3_4 ={
        id:29,
        role_id:6,
        option_id:11,
        permission_id:4
    }
    const role_detail3_5 ={
        id:30,
        role_id:6,
        option_id:12,
        permission_id:1
    }
    const role_detail3_6 ={
        id:31,
        role_id:6,
        option_id:12,
        permission_id:2
    }
    const role_detail3_7 ={
        id:32,
        role_id:6,
        option_id:12,
        permission_id:3
    }

    const role_detail3_8 ={
        id:33,
        role_id:6,
        option_id:12,
        permission_id:4
    }
    const role_detail3_9 ={
        id:34,
        role_id:6,
        option_id:14,
        permission_id:1
    }
    const role_detail3_10 ={
        id:35,
        role_id:6,
        option_id:15,
        permission_id:1
    }
    const role_detail3_11 ={
        id:36,
        role_id:6,
        option_id:16,
        permission_id:1
    }
    roles_details.push(role_detail3_1)
    roles_details.push(role_detail3_2)
    roles_details.push(role_detail3_3)
    roles_details.push(role_detail3_4)
    roles_details.push(role_detail3_5)
    roles_details.push(role_detail3_6)
    roles_details.push(role_detail3_7)
    roles_details.push(role_detail3_8)
    roles_details.push(role_detail3_9)
    roles_details.push(role_detail3_10)
    roles_details.push(role_detail3_11)
    return roles_details;

}
// positions_employees
const initPositionsEmployees = (departments_employees) =>{
    const positions_has_employees = []
    
    // Add position "Thanh vien"
    // id position truong phong cac tang: tret -> 3
    // [17,8,11,14]
    // id tang tret -> 3
    const idsTang = [7,4,5,6];
    const idsvTangTret=[]
    const idsvTang1 = []
    const idsvTang2 = []
    const idsvTang3 = []

    const positionTruongPhongSVTangId = [17,8,11,14]
    for(var i = 0; i <idsTang.length; i++) {
        for (const emp of departments_employees) {
            if(emp.departmentId == idsTang[0]){
                idsvTangTret.push(emp.employeeId)
            }
            if(emp.departmentId == idsTang[1]){
                idsvTang1.push(emp.employeeId)
            }
            if(emp.departmentId == idsTang[2]){
                idsvTang2.push(emp.employeeId)
            }
            if(emp.departmentId == idsTang[3]){
                idsvTang3.push(emp.employeeId)
            }
        }
    }
    //Tang tret
    for(var  i = 0; i < (idsvTangTret.length)/2; i++){
        const pe = {
            employees_id:idsvTangTret[i],  
            positions_id:positionTruongPhongSVTangId[0]
        }
        positions_has_employees.push(pe)

    }
    //Tang 1
    for(var  i = 0; i < (idsvTang1.length)/2; i++){
        const pe = {
            employees_id:idsvTang1[i],  
            positions_id:positionTruongPhongSVTangId[1]
        }
        positions_has_employees.push(pe)
    }
    //Tang 2
    for(var  i = 0; i < (idsvTang2.length)/2; i++){
        const pe = {
            employees_id:idsvTang2[i],  
            positions_id:positionTruongPhongSVTangId[2]
        }
        positions_has_employees.push(pe)
    }
    //Tang 3
    for(var  i = 0; i < (idsvTang3.length)/2; i++){
        const pe = {
            employees_id:idsvTang3[i],  
            positions_id:positionTruongPhongSVTangId[3]
        }
        positions_has_employees.push(pe)
    }



    const pe1 = {
        employees_id:41,  
        positions_id:1
    }
    
    const pe2 = {
        employees_id:42,  
        positions_id:3
    }
    const pe3 = {
        employees_id:43,  
        positions_id:4
    }
    const pe4 = {
        employees_id:45,  
        positions_id:10
    }
    const pe5 = {
        employees_id:46,  
        positions_id:13
    }
    const pe6 = {
        employees_id:47,  
        positions_id:16
    }
    const pe7 = {
        employees_id:48,  
        positions_id:19
    }
    positions_has_employees.push(pe1)
    positions_has_employees.push(pe2)
    positions_has_employees.push(pe3)
    positions_has_employees.push(pe4)
    positions_has_employees.push(pe5)
    positions_has_employees.push(pe6)
    positions_has_employees.push(pe7)
    
    return positions_has_employees;

}

// Quyen tao de xuat
const initProposalPermissions = () =>{
    const proposals_permissions = [];
    const pro1 ={
        id: 1,
        proposal_types_id:2,
        departments_id: 0,
        positions_id: 0,
        // Minh Dung
        employees_id: 41
    }
    const pro2 ={
        id: 2,
        proposal_types_id:2,
        departments_id: 0,
        positions_id: 0,
        // Cong Toan
        employees_id: 43
    }
    proposals_permissions.push(pro1)
    proposals_permissions.push(pro2)
    return proposals_permissions;
}
// Quyen duyet de xuat
const initApprovalStep_Detail = () =>{
    const approval_step_details =[]
    // Chuc vu truong cac tang
    //Loai de xuat dang ky sua chua
    const detail1 = {
        id: 1, 
        
        approval_steps_id: 1,
        employees_id: 0,
        departments_id: 0,
        positions_id:16
    }
    const detail2 = {
        id: 2, 
        approval_steps_id: 1,
        employees_id: 0,
        departments_id: 0,
        positions_id:7
    }
    const detail3 = {
        id: 3, 
        approval_steps_id: 1,
        employees_id: 0,
        departments_id: 0,
        positions_id:10
    }
    const detail4 = {
        id: 3, 
        approval_steps_id: 1,
        employees_id: 0,
        departments_id: 0,
        positions_id:13
    }
    approval_step_details.push(detail1)
    approval_step_details.push(detail2)
    approval_step_details.push(detail3)
    approval_step_details.push(detail4)
    return approval_step_details;
}
const initProposals = (employees) =>{
    const proposals = [];
    for(var i =1;i<=30;i++){
        var indexRandom = Math.floor(Math.random() * ((employees.length)-7));
        const proposal = {
            id:i,
            proposal_type_id:1,
            creator_id:indexRandom,
            status_id:""
        }
        proposals.push(proposal);
    }

    return proposals;
}
const initProposalDetails = (proposals,proposal_type_details) =>{
    
    const proposal_details =[]
    for(var i = 1; i <= proposals.length; i++){
        
        for(var j = 0; j <= 4 ; j++){
            if(j==1){
                const proposalDetail = {
                    id:i+j,
                    proposals_id:i,
                    field_id:j,
                    content: faker.lorem.sentence()
                }
                proposal_details.push(proposalDetail)   
            }
            if(j==2){
                const proposalDetail = {
                    id:i+j,
                    proposals_id:i,
                    field_id:j,
                    content: faker.lorem.lines()
                }
                proposal_details.push(proposalDetail)   
            }
            if(j==3){
                const proposalDetail = {
                    id: i+j,
                    proposals_id:i,
                    field_id:j,
                    content: faker.mersenne.rand()
                }
                proposal_details.push(proposalDetail)   
            }
            if(j==4){
                const proposalDetail = {
                    id: i+j,
                    proposals_id:i,
                    field_id:j,
                    content: faker.lorem.lines()
                }
                proposal_details.push(proposalDetail)   
            }
        }
    }


    return proposal_details;


}
var employees = randomEmployees(40);
var departments = randomDepartments(4);
var departments_employees = randomDepartments_Employees(departments,employees);

var options = initOptions();
var permissions = initPermission();
var role_details = initRoleDetails();
var roles = initRoles();
var statuses = initStatus();
var tasks = randomTasks(30, statuses,employees);
var task_details = randomTaskDetails(employees,tasks);
var data_types = initDataTypes();
var proposal_types = initProposalTypes();
var proposal_type_details = initProposal_type_details();
var approval_steps = initProposalSteps();
var positions = initPositions();
var positions_roles = initPositionRoles();
var positions_employees = initPositionsEmployees(departments_employees);
//Quyen tao de xuat
var proposal_permissions = initProposalPermissions();
// Quyen duyet de xuat => Dua vao day de gui thong bao moi khi co de xuat moi
var approval_step_details = initApprovalStep_Detail();
var  proposals = initProposals(employees);
var  proposal_details = initProposalDetails(proposals,proposal_type_details);

//Save data
(()=>{
    const db ={
        employees: employees,
        departments: departments,
        departments_employees: departments_employees,
        positions: positions,
        roles: roles,
        options: options,
        permissions: permissions,
        role_details: role_details,
        statuses: statuses,
        data_types: data_types,
        tasks: tasks,
        task_details: task_details,
        proposal_types: proposal_types,
        proposal_type_details: proposal_type_details,
        approval_steps: approval_steps,
        positions_roles: positions_roles,
        positions_employees: positions_employees,
        proposal_permissions: proposal_permissions,
        approval_step_details: approval_step_details,
        proposals: proposals,
        proposal_details: proposal_details
        
    }
    fs.writeFile('db.json',JSON.stringify(db),()=>{
        console.log("Write successfully!");
    })
}


)();
