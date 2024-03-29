import React from "react";

const statusOptions = [
  { name: "Aguardando Aprovação", uid: "WAITING_FOR_APPROVAL" },
  { name: "Inversor para Reparo", uid: "INVERTER_TO_REPAIR" },
  { name: "Inversor para Substituição", uid: "INVERTER_TO_REPLACE" },
  { name: "Inversor Fechado", uid: "INVERTER_CLOSED" },
  { name: "Retorno de Proposta", uid: "RETURN_BID" },
  { name: "Retirada de Inversor", uid: "INVERTER_REVERSE_PICKUP" },
  { name: "Inversor em Transporte", uid: "INVERTER_IN_TRANSPORT" },
  { name: "Perda Total", uid: "TOTAL_LOSS" },
  { name: "Inversor Recebido", uid: "INVERTER_RECEIVED" },
  { name: "Aguardando Placa", uid: "WAITING_BOARD" },
  { name: "MI para Reparo", uid: "MI_TO_REPAIR" },
  { name: "Abandonado pelo Cliente", uid: "ABANDONED_BY_CUSTOMER" },
  { name: "Retorno de Inversor", uid: "INVERTER RETURN" },
  { name: "MI para Substituição", uid: "MI_TO_REPLACE" },
  { name: "MI em Transporte", uid: "MI_IN_TRANSPORT" },
  { name: "MI Recebido", uid: "MI_RECEIVED" },
  { name: "Retorno de MI", uid: "MI_RETURN" },
  { name: "MI Fechado", uid: "MI_CLOSED" },
  { name: "Dívida Aldo", uid: "ALDO_DEBT" },
  { name: "Sem Identificação", uid: "WITHOUT_IDENTIFICATION" },
  { name: "Dívida Belenergy", uid: "BELENERGY_DEBT" },
  { name: "Dívida Edeltec", uid: "EDELTEC_DEBT" },
  { name: "Dívida Soollar", uid: "SOOLLAR_DEBT" },
  { name: "Bonificação", uid: "BONIFICAÇÃO" },
  { name: "Demonstração", uid: "DEMONSTRAÇÃO" },
];

const warranties = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

const columnsTest = [
  {name: "CASO", uid: "id", sortable: true},
  {name: "S/N", uid: "serialNumber"},
  {name: "AUTOR", uid: "author", sortable: true},
  {name: "APROVAÇÃO", uid: "approvalDate", sortable: true},
  {name: "CRIAÇÃO", uid: "createdAt", sortable: true},
  {name: "PRIORIDADE", uid: "priority", sortable: true},
  {name: "ERRO", uid: "fault", sortable: false},
  {name: "TIPO", uid: "warrantyType", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "COMENTÁRIOS", uid: "comments"},
  {name: "DESAPROVAÇÃO", uid: "reasonToDisapprove"},
  {name: "GRUPO", uid: "authorTitle"},
  {name: "MODELO", uid: "model", sortable: true},
  {name: "AÇÕES", uid: "actions"},
];

const test = [ 
  {
  id: 23000005,
  status: "active",
  caseOrigin: "",
  createdAt: "2023-10-18T15:06:41.103Z",
  approvalDate: "2023-10-18T15:06:41.103Z",
  reasonToDisapprove: "",
  warrantyType: "",
  comments: "ERRO",
  priority: null,
  author: "Mia Robinson",
  authorTitle: "Integrador",
  serialNumber: "2231314141",
  model: "SUN-3k",
},

{
  id: 23000006,
  status: "paused",
  caseOrigin: "",
  createdAt: "2023-10-18T15:06:41.103Z",
  approvalDate: "2023-10-18T15:06:41.103Z",
  reasonToDisapprove: "",
  warrantyType: "",
  comments: "ERRO",
  priority: null,
  author: "Lucas Harris",
  authorTitle: "Integrador",
  serialNumber: "2231322141",
  model: "SUN-3k",
},

{
  id: 23000007,
  status: "vacation",
  caseOrigin: "",
  createdAt: "2023-10-18T15:06:41.103Z",
  approvalDate: "2023-10-18T15:06:41.103Z",
  reasonToDisapprove: "",
  warrantyType: "",
  comments: "ERRO",
  priority: null,
  author: "Sophia Taylor",
  authorTitle: "Integrador",
  serialNumber: "2231314141",
  model: "SUN-3k",
},

]

export {columnsTest as columns, test as warranties, statusOptions};
