const SB_URL = "https://lvumvnybggqudgccscvm.supabase.co";
    const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2dW12bnliZ2dxdWRnY2NzY3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0ODIzMTAsImV4cCI6MjA5NTA1ODMxMH0.q7hnXLG5NpWC_k0LjZBVPtH63eC-95Ug8lCvV9RmVHo";
    const sb = supabase.createClient(SB_URL, SB_KEY);

    const PIXEL_PELICULAS_DATA = [{"modelo_principal": "Samsung A01", "marca": "Samsung", "modelos_compativeis": ["M01"], "total_compativeis": 1}, {"modelo_principal": "Samsung A01 Core", "marca": "Samsung", "modelos_compativeis": ["M01 Core"], "total_compativeis": 1}, {"modelo_principal": "Samsung A02", "marca": "Samsung", "modelos_compativeis": ["A02S", "A03", "A03S", "A03 Core", "A04", "A04S", "A04E", "A12", "A13", "M12"], "total_compativeis": 10}, {"modelo_principal": "Samsung A02S", "marca": "Samsung", "modelos_compativeis": ["A02", "A03", "A03S", "A03 Core", "A04", "A04S", "A04E", "A12", "A13", "M12"], "total_compativeis": 10}, {"modelo_principal": "Samsung A03", "marca": "Samsung", "modelos_compativeis": ["A03s", "A03 Core", "A04", "A04s", "A04e", "A02s", "A12", "A13 5G", "A32 5G", "M12", "Moto G9 Play", "G20", "E20", "One Fusion", "Realme 50A", "C35", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 23}, {"modelo_principal": "Samsung A03S", "marca": "Samsung", "modelos_compativeis": ["A03", "A03 Core", "A04", "A04s", "A04e", "A02s", "A12", "A13 5G", "A32 5G", "M12", "Moto G9 Play", "G20", "E20", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 22}, {"modelo_principal": "Samsung A03 Core", "marca": "Samsung", "modelos_compativeis": ["A03", "A03s", "A04", "A04s", "A04e", "A02s", "A12", "A13 5G", "A32 5G", "M02", "M12", "Moto G9 Play", "G20", "E20", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 23}, {"modelo_principal": "Samsung A04", "marca": "Samsung", "modelos_compativeis": ["A04s", "A04e", "A02", "A02s", "A03", "A03s", "A03 Core", "A12", "A13", "A32 5G", "M12", "Moto G9 Play", "G20", "E20", "E13", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 24}, {"modelo_principal": "Samsung A04E", "marca": "Samsung", "modelos_compativeis": ["A04", "A04s", "A03", "A03s", "A03 Core", "A02", "A02s", "A12", "A13 5G", "A32 5G", "M12", "Moto G9 Play", "G20", "E20", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 23}, {"modelo_principal": "Samsung A04S", "marca": "Samsung", "modelos_compativeis": ["A04", "A04e", "A02", "A02s", "A03", "A03s", "A03 Core", "A12", "A13", "A32 5G", "M12", "Moto G9 Play", "G20", "E20", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 23}, {"modelo_principal": "Samsung A05", "marca": "Samsung", "modelos_compativeis": ["A05S", "Redmi 13C", "Poco C65"], "total_compativeis": 3}, {"modelo_principal": "Samsung A05s", "marca": "Samsung", "modelos_compativeis": ["A05", "A07", "M05", "F05", "Redmi 13C", "Poco C65"], "total_compativeis": 6}, {"modelo_principal": "Samsung A06", "marca": "Samsung", "modelos_compativeis": ["A07", "A05", "A05s", "Redmi 13C", "Realme Note 50", "Realme Note 60", "C53", "C51", "C61", "Poco C65"], "total_compativeis": 10}, {"modelo_principal": "Samsung A07", "marca": "Samsung", "modelos_compativeis": ["A06", "A05", "M05", "F05", "F06 5G", "A05s"], "total_compativeis": 6}, {"modelo_principal": "Samsung A8 Plus", "marca": "Samsung", "modelos_compativeis": ["A7", "A6 Plus", "J8"], "total_compativeis": 3}, {"modelo_principal": "Samsung A10", "marca": "Samsung", "modelos_compativeis": ["A10s", "M10", "Redmi 8A"], "total_compativeis": 3}, {"modelo_principal": "Samsung A10S", "marca": "Samsung", "modelos_compativeis": ["A10", "M10", "M01s"], "total_compativeis": 3}, {"modelo_principal": "Samsung A11", "marca": "Samsung", "modelos_compativeis": ["M11", "Moto G8"], "total_compativeis": 2}, {"modelo_principal": "Samsung A12", "marca": "Samsung", "modelos_compativeis": ["Samsung A13 5G", "A32 5G", "A02", "A02s", "A03", "A03s", "A03 Core", "A04", "A04s", "A04e", "M32 5G", "M12", "M04", "M02", "F04", "F02s", "Redmi A1", "Moto E20", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31 C30", "C30s", "C25", "C21Y", "Poco C3"], "total_compativeis": 27}, {"modelo_principal": "Samsung A13 4G", "marca": "Samsung", "modelos_compativeis": ["Samsung A23", "Samsung A23 5G", "Samsung M13", "Samsung M23", "Samsung F13", "Samsung F23", "Infinix Hot 20 5G"], "total_compativeis": 7}, {"modelo_principal": "Samsung A13 5G", "marca": "Samsung", "modelos_compativeis": ["A12", "A04e", "A04s", "A03 Core", "A03", "A03s", "A12", "A32 5G", "M12", "Moto G9 Play", "G20", "E20", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 21}, {"modelo_principal": "Samsung A14", "marca": "Samsung", "modelos_compativeis": ["A14 5G", "A22 5G", "F42", "M14"], "total_compativeis": 4}, {"modelo_principal": "Samsung A15 4G", "marca": "Samsung", "modelos_compativeis": ["A15 5G", "A25", "M34", "M15", "F34"], "total_compativeis": 5}, {"modelo_principal": "Samsung A15 5G", "marca": "Samsung", "modelos_compativeis": ["A15 4G", "A25", "M34", "M15", "F34"], "total_compativeis": 5}, {"modelo_principal": "Samsung A16", "marca": "Samsung", "modelos_compativeis": ["A16 5G", "A26", "M16", "F16"], "total_compativeis": 4}, {"modelo_principal": "Samsung A17", "marca": "Samsung", "modelos_compativeis": ["A17 5G", "A16", "A16 5G", "A26", "F16", "M16"], "total_compativeis": 6}, {"modelo_principal": "Samsung A20", "marca": "Samsung", "modelos_compativeis": ["A30", "A30s", "A50", "A50s", "M10s"], "total_compativeis": 5}, {"modelo_principal": "Samsung A20S", "marca": "Samsung", "modelos_compativeis": ["A12", "A03s", "A03 Core", "A02s", "A32 5G", "M32 5G", "M12", "M02s", "F02s"], "total_compativeis": 9}, {"modelo_principal": "Samsung A21S", "marca": "Samsung", "modelos_compativeis": ["Oppo A36", "A76", "A11s", "Realme C17"], "total_compativeis": 4}, {"modelo_principal": "Samsung A22 4G", "marca": "Samsung", "modelos_compativeis": ["A31", "A32", "A33", "M31", "M22", "M32"], "total_compativeis": 6}, {"modelo_principal": "Samsung A22 5G", "marca": "Samsung", "modelos_compativeis": ["F42"], "total_compativeis": 1}, {"modelo_principal": "Samsung A23", "marca": "Samsung", "modelos_compativeis": ["A23 5G", "F23", "F13", "M33", "M23", "M13"], "total_compativeis": 6}, {"modelo_principal": "Samsung A25", "marca": "Samsung", "modelos_compativeis": ["A24", "A34", "A15", "F34"], "total_compativeis": 4}, {"modelo_principal": "Samsung A26", "marca": "Samsung", "modelos_compativeis": ["A16 4G", "A16 5G", "A17", "M16", "F16"], "total_compativeis": 5}, {"modelo_principal": "Samsung A30", "marca": "Samsung", "modelos_compativeis": ["A30s", "A20", "A50", "A50s", "M21"], "total_compativeis": 5}, {"modelo_principal": "Samsung A30s", "marca": "Samsung", "modelos_compativeis": ["A30", "A20", "A50", "A50s", "M21"], "total_compativeis": 5}, {"modelo_principal": "Samsung A32", "marca": "Samsung", "modelos_compativeis": ["A31", "A33", "A22", "M32"], "total_compativeis": 4}, {"modelo_principal": "Samsung A32 5G", "marca": "Samsung", "modelos_compativeis": ["A13 5G", "A12", "A04s", "A04e", "A03", "A03s", "A03 Core", "M12", "Moto G9 Play", "G20", "E20", "One Fusion", "Realme 50A", "C33", "C33 2023", "C31", "C30", "C30s", "C25", "C21Y"], "total_compativeis": 20}, {"modelo_principal": "Samsung A33", "marca": "Samsung", "modelos_compativeis": ["A32", "A31", "M32"], "total_compativeis": 3}, {"modelo_principal": "Samsung A35", "marca": "Samsung", "modelos_compativeis": ["Samsung A55", "M35", "A56"], "total_compativeis": 3}, {"modelo_principal": "Samsung A36", "marca": "Samsung", "modelos_compativeis": ["A56", "S24 FE"], "total_compativeis": 2}, {"modelo_principal": "Samsung A50", "marca": "Samsung", "modelos_compativeis": ["A50s", "M31", "A30", "A20", "A22", "M21"], "total_compativeis": 6}, {"modelo_principal": "Samsung A50S", "marca": "Samsung", "modelos_compativeis": ["A20", "A30", "A31", "A50", "M31"], "total_compativeis": 5}, {"modelo_principal": "Samsung A51", "marca": "Samsung", "modelos_compativeis": ["A52", "A52s", "A52 5G", "M31s", "S20 FE", "Note 10", "Note 11"], "total_compativeis": 7}, {"modelo_principal": "Samsung A52", "marca": "Samsung", "modelos_compativeis": ["A52s", "A52 5G", "A53", "A51", "S20 FE", "S20 FE 5G", "Note 10", "Note 10s", "Note 11", "Poco M5s", "Moto G42", "Moto G84"], "total_compativeis": 12}, {"modelo_principal": "Samsung A53", "marca": "Samsung", "modelos_compativeis": ["A52", "A52s", "A52 5G", "S20 FE", "S20 FE 5G", "Moto G84", "G42"], "total_compativeis": 7}, {"modelo_principal": "Samsung A54", "marca": "Samsung", "modelos_compativeis": ["S23 FE", "S22 Plus"], "total_compativeis": 2}, {"modelo_principal": "Samsung A55", "marca": "Samsung", "modelos_compativeis": ["Samsung A35"], "total_compativeis": 1}, {"modelo_principal": "Samsung A56", "marca": "Samsung", "modelos_compativeis": ["A56", "A36", "S24 FE", "S25 FE"], "total_compativeis": 4}, {"modelo_principal": "Samsung A70", "marca": "Samsung", "modelos_compativeis": ["A90 5G"], "total_compativeis": 1}, {"modelo_principal": "Samsung A71", "marca": "Samsung", "modelos_compativeis": ["A72", "M62", "M55s", "M51", "F62", "F55", "Redmi Note 11 Pro"], "total_compativeis": 7}, {"modelo_principal": "Samsung A72", "marca": "Samsung", "modelos_compativeis": ["M54", "M53", "M52", "Redmi Note 9 Pro 5G", "Poco X4 Pro"], "total_compativeis": 5}, {"modelo_principal": "Samsung A73", "marca": "Samsung", "modelos_compativeis": ["F55", "F62", "Note 10 Lite", "Redmi Note 10 Pro", "Redmi Note 11 Pro"], "total_compativeis": 5}, {"modelo_principal": "Samsung Gran Prime", "marca": "Samsung", "modelos_compativeis": ["Gran Prime Duos TV"], "total_compativeis": 1}, {"modelo_principal": "Samsung J2 Core", "marca": "Samsung", "modelos_compativeis": ["J2 Pro 2018", "Gran Prime", "Lenovo C2", "Moto C", "C Plus"], "total_compativeis": 5}, {"modelo_principal": "Samsung J2 Prime", "marca": "Samsung", "modelos_compativeis": ["J3 2016", "J5"], "total_compativeis": 2}, {"modelo_principal": "Samsung J3 2016", "marca": "Samsung", "modelos_compativeis": ["J2 Prime", "J5"], "total_compativeis": 2}, {"modelo_principal": "Samsung J4", "marca": "Samsung", "modelos_compativeis": ["J4 2018", "J7 2016", "On 7 Pro"], "total_compativeis": 3}, {"modelo_principal": "Samsung J4 Plus", "marca": "Samsung", "modelos_compativeis": ["J4 Core", "J6 Plus", "J8", "A6 Plus", "A8"], "total_compativeis": 5}, {"modelo_principal": "Samsung J5", "marca": "Samsung", "modelos_compativeis": ["J3"], "total_compativeis": 1}, {"modelo_principal": "Samsung J5 Pro", "marca": "Samsung", "modelos_compativeis": ["A5 2017"], "total_compativeis": 1}, {"modelo_principal": "Samsung J6 Plus", "marca": "Samsung", "modelos_compativeis": ["J4 Plus"], "total_compativeis": 1}, {"modelo_principal": "Samsung J7 Prime", "marca": "Samsung", "modelos_compativeis": ["On 8"], "total_compativeis": 1}, {"modelo_principal": "Samsung J7 Pro", "marca": "Samsung", "modelos_compativeis": ["J7 2017"], "total_compativeis": 1}, {"modelo_principal": "Samsung J8 2018", "marca": "Samsung", "modelos_compativeis": ["A8 Plus", "J6 Plus", "J4 Core", "J4 Plus"], "total_compativeis": 4}, {"modelo_principal": "Samsung M02", "marca": "Samsung", "modelos_compativeis": ["M04", "M12", "M32 5G", "A02", "A02s", "A03s", "A04e", "A12", "A13 5G", "A32 5G", "F04", "F12", "Realme C21Y", "C25", "C30", "C33", "C33 2023", "50A"], "total_compativeis": 18}, {"modelo_principal": "Samsung M10S", "marca": "Samsung", "modelos_compativeis": ["A20", "A30s", "Note 8"], "total_compativeis": 3}, {"modelo_principal": "Samsung M11", "marca": "Samsung", "modelos_compativeis": ["A11", "Moto G8"], "total_compativeis": 2}, {"modelo_principal": "Samsung M12", "marca": "Samsung", "modelos_compativeis": ["M32 5G", "M04", "M02", "A02", "A02s", "A04e", "A04s", "A12", "A13 5G", "A20s", "A32 5G", "F12", "F04", "F02s", "Realme C30"], "total_compativeis": 15}, {"modelo_principal": "Samsung M13", "marca": "Samsung", "modelos_compativeis": ["M23", "M33", "A13", "A23 5G", "A42", "F23", "F13"], "total_compativeis": 7}, {"modelo_principal": "Samsung M14", "marca": "Samsung", "modelos_compativeis": ["A05s"], "total_compativeis": 1}, {"modelo_principal": "Samsung M15", "marca": "Samsung", "modelos_compativeis": ["Samsung M34", "Samsung A25", "Samsung A15", "Samsung A15 5G", "Samsung F34"], "total_compativeis": 5}, {"modelo_principal": "Samsung M21", "marca": "Samsung", "modelos_compativeis": ["M21s", "A30s", "Note 8"], "total_compativeis": 3}, {"modelo_principal": "Samsung M22", "marca": "Samsung", "modelos_compativeis": ["A31"], "total_compativeis": 1}, {"modelo_principal": "Samsung M23", "marca": "Samsung", "modelos_compativeis": ["M33", "A23", "A23 5G", "F23", "F13"], "total_compativeis": 5}, {"modelo_principal": "Samsung M30", "marca": "Samsung", "modelos_compativeis": ["A50s"], "total_compativeis": 1}, {"modelo_principal": "Samsung M31", "marca": "Samsung", "modelos_compativeis": ["M31 Prime", "M10s", "A30s", "A20"], "total_compativeis": 4}, {"modelo_principal": "Samsung M31S", "marca": "Samsung", "modelos_compativeis": ["Moto G84"], "total_compativeis": 1}, {"modelo_principal": "Samsung M32", "marca": "Samsung", "modelos_compativeis": ["M22"], "total_compativeis": 1}, {"modelo_principal": "Samsung M32 5G", "marca": "Samsung", "modelos_compativeis": ["M04", "M02s", "A13 5G", "A12", "A04", "A04s", "A04e", "A02s", "A03", "A03s", "A03 Core", "F04", "F02s", "Poco C3", "Realme C33 2023", "C33", "C31", "C30s", "C25", "C21", "C21Y", "Narzo 20", "Q2i"], "total_compativeis": 23}, {"modelo_principal": "Samsung M34", "marca": "Samsung", "modelos_compativeis": ["A24", "A25", "F34"], "total_compativeis": 3}, {"modelo_principal": "Samsung M35", "marca": "Samsung", "modelos_compativeis": ["A35", "A55"], "total_compativeis": 2}, {"modelo_principal": "Samsung M42", "marca": "Samsung", "modelos_compativeis": ["A42"], "total_compativeis": 1}, {"modelo_principal": "Samsung M51", "marca": "Samsung", "modelos_compativeis": ["M52", "M53", "M54", "F54", "Redmi Note 11 Pro Plus"], "total_compativeis": 5}, {"modelo_principal": "Samsung M52", "marca": "Samsung", "modelos_compativeis": ["M53", "M54", "A72", "F54"], "total_compativeis": 4}, {"modelo_principal": "Samsung M53", "marca": "Samsung", "modelos_compativeis": ["M52", "M54", "A72", "F54"], "total_compativeis": 4}, {"modelo_principal": "Samsung M54", "marca": "Samsung", "modelos_compativeis": ["M53", "A72", "F54", "Poco X3"], "total_compativeis": 4}, {"modelo_principal": "Samsung M55", "marca": "Samsung", "modelos_compativeis": ["M55s", "M54", "M53", "C55", "F55"], "total_compativeis": 5}, {"modelo_principal": "Samsung M62", "marca": "Samsung", "modelos_compativeis": ["M55", "M55s", "F55", "F62", "C55"], "total_compativeis": 5}, {"modelo_principal": "Samsung Note 20 4G", "marca": "Samsung", "modelos_compativeis": ["Note 20 5G", "S21 Plus", "S10 Lite", "Edge 30 Ultra"], "total_compativeis": 4}, {"modelo_principal": "Samsung S10 Lite", "marca": "Samsung", "modelos_compativeis": ["A71 5G", "Samsung Note 20"], "total_compativeis": 2}, {"modelo_principal": "Samsung S20 FE", "marca": "Samsung", "modelos_compativeis": ["A51", "A52", "A52S", "A53"], "total_compativeis": 4}, {"modelo_principal": "Samsung S20 Plus", "marca": "Samsung", "modelos_compativeis": ["Samsung Note 20"], "total_compativeis": 1}, {"modelo_principal": "Samsung S21 Plus", "marca": "Samsung", "modelos_compativeis": ["Samsung Note 20", "Note 20 5G"], "total_compativeis": 2}, {"modelo_principal": "Samsung S22", "marca": "Samsung", "modelos_compativeis": ["S23"], "total_compativeis": 1}, {"modelo_principal": "Samsung S22 Plus", "marca": "Samsung", "modelos_compativeis": ["S23 Plus", "S23 FE", "S24 Plus"], "total_compativeis": 3}, {"modelo_principal": "Samsung S22 Ultra", "marca": "Samsung", "modelos_compativeis": ["S23 Ultra"], "total_compativeis": 1}, {"modelo_principal": "Samsung S23", "marca": "Samsung", "modelos_compativeis": ["S22"], "total_compativeis": 1}, {"modelo_principal": "Samsung S23 FE", "marca": "Samsung", "modelos_compativeis": ["S22 Plus", "S23 Plus", "S24 Plus", "A54"], "total_compativeis": 4}, {"modelo_principal": "Samsung S23 Plus", "marca": "Samsung", "modelos_compativeis": ["S23 FE", "S22 Plus", "S24 Plus"], "total_compativeis": 3}, {"modelo_principal": "Samsung S23 Ultra", "marca": "Samsung", "modelos_compativeis": ["S22 Ultra"], "total_compativeis": 1}, {"modelo_principal": "Samsung S24", "marca": "Samsung", "modelos_compativeis": ["S25"], "total_compativeis": 1}, {"modelo_principal": "Samsung S24 Plus", "marca": "Samsung", "modelos_compativeis": ["S22 Plus", "S23 Plus", "S23 FE"], "total_compativeis": 3}, {"modelo_principal": "Samsung S25", "marca": "Samsung", "modelos_compativeis": ["S24"], "total_compativeis": 1}, {"modelo_principal": "Poco C40", "marca": "Xiaomi", "modelos_compativeis": ["Poco C61", "Redmi 10C", "10 Power"], "total_compativeis": 3}, {"modelo_principal": "Poco C50", "marca": "Xiaomi", "modelos_compativeis": ["Poco C51", "Redmi 10A", "A2", "A2 Plus", "A1"], "total_compativeis": 5}, {"modelo_principal": "Poco C55", "marca": "Xiaomi", "modelos_compativeis": ["Poco C40", "Poco C61", "Redmi 10C", "Redmi 10 Power", "Redmi 12C", "Redmi A3"], "total_compativeis": 6}, {"modelo_principal": "Poco C31", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 9A", "9C", "9 Activ", "9A Sport", "10A", "A12", "Poco C3", "Redmi 9i", "Samsung A13"], "total_compativeis": 9}, {"modelo_principal": "Poco C61", "marca": "Xiaomi", "modelos_compativeis": ["Poco C40", "Redmi 10C", "10 Power", "12C"], "total_compativeis": 4}, {"modelo_principal": "Poco C65", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 13C", "13C 5G", "13R", "Poco M6", "Samsung A05"], "total_compativeis": 5}, {"modelo_principal": "Poco C71", "marca": "Xiaomi", "modelos_compativeis": ["C75 5G", "Redmi 14R", "14C", "A5"], "total_compativeis": 4}, {"modelo_principal": "Poco C75", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 14R", "Redmi 14C"], "total_compativeis": 2}, {"modelo_principal": "Poco F3", "marca": "Xiaomi", "modelos_compativeis": ["Note 11 Pro", "Samsung A71", "Mi 11i", "Xiaomi 11i"], "total_compativeis": 4}, {"modelo_principal": "Poco F4", "marca": "Xiaomi", "modelos_compativeis": ["F3", "X4 Pro", "A72"], "total_compativeis": 3}, {"modelo_principal": "Poco F4 5G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 11 Pro"], "total_compativeis": 1}, {"modelo_principal": "Poco F5", "marca": "Xiaomi", "modelos_compativeis": ["X6", "X6 Pro", "M6 Pro", "Note 12 Turbo", "13 5G", "13 Pro 4G", "13 Pro 5G"], "total_compativeis": 7}, {"modelo_principal": "Poco F5 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 13 4G"], "total_compativeis": 1}, {"modelo_principal": "Poco F6", "marca": "Xiaomi", "modelos_compativeis": ["Poco X6 Pro", "Xiaomi 14T", "Xiaomi 14T Pro", "Note 13 Pro"], "total_compativeis": 4}, {"modelo_principal": "Poco M2", "marca": "Xiaomi", "modelos_compativeis": ["Poco M3", "Redmi 9", "Redmi 9T", "Redmi Note 9 4G"], "total_compativeis": 4}, {"modelo_principal": "Poco M2 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Poco X3", "Note 10 Lite", "Poco X5"], "total_compativeis": 3}, {"modelo_principal": "Poco M3", "marca": "Xiaomi", "modelos_compativeis": ["Poco M2", "Redmi 9T"], "total_compativeis": 2}, {"modelo_principal": "Poco M3 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Note 10T", "Note 10 5G", "Note 11 SE", "Redmi 10 2022", "Redmi 10 Prime 2022"], "total_compativeis": 5}, {"modelo_principal": "Poco M4", "marca": "Xiaomi", "modelos_compativeis": ["Samsung A03", "A03S", "A03 Core", "A12"], "total_compativeis": 4}, {"modelo_principal": "Poco M4 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Poco M5s", "Note 10 4G", "Note 11", "Note 12S", "Samsung S20 FE 4G", "Samsung S20 FE 5G"], "total_compativeis": 6}, {"modelo_principal": "Poco M5", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 11 Prime", "Redmi 11 Prime 5G", "Redmi Note 11E", "Redmi Note 11R", "Redmi 10A", "A12"], "total_compativeis": 6}, {"modelo_principal": "Poco M5s", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 10", "Redmi Note 10S"], "total_compativeis": 2}, {"modelo_principal": "Poco M6", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 13R", "13C 5G", "Poco C65"], "total_compativeis": 3}, {"modelo_principal": "Poco M6 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Poco X6", "Poco X6 Pro", "Poco F5", "Note 12 Turbo", "Note 13 5G", "Note 13 Pro 4G", "Note 13 Pro 5G", "Note 13 Pro Plus", "Note 13R Pro"], "total_compativeis": 9}, {"modelo_principal": "Poco X3", "marca": "Xiaomi", "modelos_compativeis": ["Poco X4 Pro", "Note 9S", "Note 9 Pro"], "total_compativeis": 3}, {"modelo_principal": "Poco X3 GT", "marca": "Xiaomi", "modelos_compativeis": ["Poco M4 Pro 5G", "Note 11S 5G", "Redmi Note 11T"], "total_compativeis": 3}, {"modelo_principal": "Poco X3 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Poco X3"], "total_compativeis": 1}, {"modelo_principal": "Poco X4 GT", "marca": "Xiaomi", "modelos_compativeis": ["Redmi K50i"], "total_compativeis": 1}, {"modelo_principal": "Poco X4 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Poco X3", "Samsung M53"], "total_compativeis": 2}, {"modelo_principal": "Poco X5", "marca": "Xiaomi", "modelos_compativeis": ["Note 9S", "Note 9 Pro", "Note 12", "Realme C55"], "total_compativeis": 4}, {"modelo_principal": "Poco X5 Pro", "marca": "Xiaomi", "modelos_compativeis": ["A71"], "total_compativeis": 1}, {"modelo_principal": "Poco X6", "marca": "Xiaomi", "modelos_compativeis": ["Poco X6 Pro", "Poco M6 Pro", "Poco F5", "Note 12 Turbo", "Note 13 5G", "Note 13 Pro 4G", "Note 13 Pro 5G"], "total_compativeis": 7}, {"modelo_principal": "Poco X6 Neo", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 13R Pro", "Realme 13 Plus"], "total_compativeis": 2}, {"modelo_principal": "Poco X6 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Poco X6", "Poco M6 Pro", "Poco F5", "Note 12 Turbo", "Note 13 5G", "Note 13 Pro 4G", "Note 13 Pro 5G"], "total_compativeis": 7}, {"modelo_principal": "Poco X7", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 14 Pro 5G", "Note 14 Pro Plus 5G"], "total_compativeis": 2}, {"modelo_principal": "Poco X7 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Poco X6", "Poco X6 Pro", "Redmi Note 13 Pro"], "total_compativeis": 3}, {"modelo_principal": "Redmi 7", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Y3"], "total_compativeis": 1}, {"modelo_principal": "Redmi 8", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 8A", "Redmi 8A Pro"], "total_compativeis": 2}, {"modelo_principal": "Redmi 8A", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 8A Pro", "Redmi 8"], "total_compativeis": 2}, {"modelo_principal": "Redmi 9", "marca": "Xiaomi", "modelos_compativeis": ["Poco M2"], "total_compativeis": 1}, {"modelo_principal": "Redmi 9A", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 9C", "Redmi 9i", "Poco C3"], "total_compativeis": 3}, {"modelo_principal": "Redmi 9C", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 9A", "Redmi 9i", "Poco C3"], "total_compativeis": 3}, {"modelo_principal": "Redmi 9i", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 9A", "Redmi 9C", "Poco C3"], "total_compativeis": 3}, {"modelo_principal": "Redmi 9T", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 9 4G", "Redmi 9 Power", "Poco M2", "Poco M3"], "total_compativeis": 4}, {"modelo_principal": "Redmi 10", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10C", "Redmi 10 Power", "Poco C40"], "total_compativeis": 3}, {"modelo_principal": "Redmi 10A", "marca": "Xiaomi", "modelos_compativeis": ["Redmi A1", "Redmi 9A", "Redmi 9C", "Redmi 9i", "Poco C31", "Poco C3", "Poco C51", "Poco C50"], "total_compativeis": 8}, {"modelo_principal": "Redmi 10C", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10 Power", "Poco C40", "Poco C61"], "total_compativeis": 3}, {"modelo_principal": "Redmi 10 5G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 11 Prime", "Redmi Note 11R", "Redmi Note 11E"], "total_compativeis": 3}, {"modelo_principal": "Redmi 10 2022", "marca": "Xiaomi", "modelos_compativeis": ["Note 10 5G", "Note 10T", "Redmi 10 Prime", "10 Prime 2022", "Poco M3 Pro", "Moto G31"], "total_compativeis": 6}, {"modelo_principal": "Redmi 10 Power", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10C", "Poco C40", "Poco C61"], "total_compativeis": 3}, {"modelo_principal": "Redmi 10 Prime", "marca": "Xiaomi", "modelos_compativeis": ["10 Prime 2022", "Redmi 10 2022"], "total_compativeis": 2}, {"modelo_principal": "Redmi 11 Prime", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10 5G", "Redmi Note 11R", "Redmi Note 11E"], "total_compativeis": 3}, {"modelo_principal": "Redmi 12", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 12 5G", "Redmi 13", "Redmi Note 12R", "Redmi Note 13R", "Poco M6 4G", "Poco M6 Pro 5G", "Poco M6 Plus", "Infinix Zero"], "total_compativeis": 8}, {"modelo_principal": "Redmi 12", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 13", "Redmi Note 12R", "Redmi Note 13R", "Poco M6 4G", "Poco M6 Pro 5G"], "total_compativeis": 5}, {"modelo_principal": "Redmi 12C", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10C", "Redmi 10 Power", "Redmi A3", "Redmi A3x", "Poco C40", "Poco C55", "Poco C61"], "total_compativeis": 7}, {"modelo_principal": "Redmi 12 5G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 12", "13", "12R", "13R", "Poco M6 4G", "M6 Pro 5G", "M6 Plus", "Infinix Zero"], "total_compativeis": 8}, {"modelo_principal": "Redmi 13", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 13 5G", "Redmi 12", "Redmi 12 5G", "Redmi Note 12R", "Redmi Note 13R", "Redmi 13x", "Poco M6 4G", "Poco M6 Pro 5G", "Infinix Zero"], "total_compativeis": 9}, {"modelo_principal": "Redmi 13C", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 13C 5G", "Redmi A3", "Poco C65", "Redmi 13R", "Poco M6", "Samsung A07", "Samsung A05"], "total_compativeis": 7}, {"modelo_principal": "Redmi 13C 5G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 13C", "Poco C65", "Redmi 13R", "Redmi A3", "Poco M6", "Samsung A05", "Samsung A05s"], "total_compativeis": 7}, {"modelo_principal": "Redmi 13x", "marca": "Xiaomi", "modelos_compativeis": ["13 4G", "13 5G", "Note 13R", "12 5G", "Note 12R", "Poco M6 4G", "M6 Plus", "M6 Pro 5G", "Infinix Zero"], "total_compativeis": 9}, {"modelo_principal": "Redmi 13 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi 13T", "13T Pro"], "total_compativeis": 2}, {"modelo_principal": "Redmi 14C", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 14R", "Infinix Hot 10 Play"], "total_compativeis": 2}, {"modelo_principal": "Redmi 15C", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 14C", "Redmi A5", "Poco C71", "C75", "C85", "M7"], "total_compativeis": 6}, {"modelo_principal": "Redmi A1", "marca": "Xiaomi", "modelos_compativeis": ["Redmi A1 Plus", "Redmi A2", "Redmi 9A", "Redmi 9C", "Redmi 9i", "Redmi 10A", "Poco C31", "Poco C50", "Poco C51", "Poco C3"], "total_compativeis": 10}, {"modelo_principal": "Redmi A1 Plus", "marca": "Xiaomi", "modelos_compativeis": ["A1", "A2", "9A", "9C", "9i", "10A", "Poco C31", "C50", "C51", "C3"], "total_compativeis": 10}, {"modelo_principal": "Redmi A2", "marca": "Xiaomi", "modelos_compativeis": ["Redmi A2 Plus", "Redmi A1", "Redmi A1 Plus", "Redmi 9A", "Redmi 9C", "Redmi 9i", "Redmi 10A", "Poco C51", "Poco C50", "Poco C31", "Poco C3"], "total_compativeis": 11}, {"modelo_principal": "Redmi A3", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10C", "Redmi 12C", "Redmi 10 Power", "Poco C40", "Poco C61"], "total_compativeis": 5}, {"modelo_principal": "Redmi A3x", "marca": "Xiaomi", "modelos_compativeis": ["Redmi A3", "Redmi 10C", "Redmi", "Redmi 10 Power", "Poco C40", "Poco C55", "Poco C61"], "total_compativeis": 7}, {"modelo_principal": "Redmi A5", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 14C", "Redmi 14R", "Redmi A3 Pro", "Poco C71", "Poco C75", "Infinix Hot 10 Play", "G06"], "total_compativeis": 7}, {"modelo_principal": "Redmi K50", "marca": "Xiaomi", "modelos_compativeis": ["Redmi K50 Pro", "Redmi K60E"], "total_compativeis": 2}, {"modelo_principal": "Redmi K50 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Redmi K50", "Redmi K60E"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 7", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 7S", "Redmi Note 7 Pro"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 8", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 8 2021"], "total_compativeis": 1}, {"modelo_principal": "Redmi Note 8 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Oppo A9X", "Redmi 9 Power", "Redmi 9T"], "total_compativeis": 3}, {"modelo_principal": "Redmi Note 9", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 9T", "Redmi Note 9 5G"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 9S", "marca": "Xiaomi", "modelos_compativeis": ["Poco M2 Pro", "Poco X5"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 9 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 9S", "Redmi Note 9 Pro Max", "Redmi Note 10 Lite", "Redmi Note 12", "Poco X5"], "total_compativeis": 5}, {"modelo_principal": "Redmi Note 10s", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 10 4G", "Redmi Note 11", "Redmi Note 11S", "Redmi Note 12S", "Poco M4 Pro 4G", "Poco M5s"], "total_compativeis": 6}, {"modelo_principal": "Redmi Note 10T", "marca": "Xiaomi", "modelos_compativeis": ["Note 10 5G", "Note 11 SE", "Poco M3 Pro"], "total_compativeis": 3}, {"modelo_principal": "Redmi Note 10 4G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 10S", "Redmi Note 11", "Redmi Note 11S", "Redmi Note 12S", "Poco M4 Pro 4G", "Poco M5s"], "total_compativeis": 6}, {"modelo_principal": "Redmi Note 10 5G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 10T", "Redmi Note 11 SE", "Poco M3 Pro"], "total_compativeis": 3}, {"modelo_principal": "Redmi Note 10 Lite", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 9S", "Redmi Note 9 Pro", "Redmi Note 9 Pro Max", "Redmi Note 12", "Poco X5"], "total_compativeis": 5}, {"modelo_principal": "Redmi Note 10 Pro 4G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 11 Pro", "Redmi Note 12 Pro 4G"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 10 Pro Max", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 9 Pro 5G"], "total_compativeis": 1}, {"modelo_principal": "Redmi Note 11R", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10 5G", "Redmi 11 Prime", "Redmi Note 11E", "Poco M5"], "total_compativeis": 4}, {"modelo_principal": "Redmi Note 11S", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 12S", "Xiaomi 12 Lite", "Poco M5s", "M4 Pro"], "total_compativeis": 4}, {"modelo_principal": "Redmi Note 11S 5G", "marca": "Xiaomi", "modelos_compativeis": ["Note 11E Pro", "Note 12 Pro", "Poco M4 Pro 5G"], "total_compativeis": 3}, {"modelo_principal": "Redmi Note 11 4G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 10", "Redmi Note 10S", "Redmi Note 11S", "Redmi Note 12S", "Poco M4 Pro 4G", "Poco M5s"], "total_compativeis": 6}, {"modelo_principal": "Redmi Note 11 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 11 Pro Plus", "Redmi Note 10 Pro", "Redmi Note 12 Pro 4G", "Poco X4 Pro"], "total_compativeis": 4}, {"modelo_principal": "Redmi Note 11 Pro Plus", "marca": "Xiaomi", "modelos_compativeis": ["Poco X4 Pro", "Poco F3"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 12", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 9S", "Redmi Note 9 Pro", "Redmi Note 9 Pro Max", "Redmi Note 10 Lite", "Poco X5"], "total_compativeis": 5}, {"modelo_principal": "Redmi Note 12S", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 10 4G", "Redmi Note 10S", "Redmi Note 11", "Redmi Note 11S", "Poco M4 Pro 4G"], "total_compativeis": 5}, {"modelo_principal": "Redmi Note 12 5G", "marca": "Xiaomi", "modelos_compativeis": ["Note 12 4G", "Note 9S", "Note 9 Pro", "Note 9 Pro Max", "Note 10 Lite", "Poco X5", "Oppo A58 4G", "Realme C55", "C75", "C75x"], "total_compativeis": 10}, {"modelo_principal": "Redmi Note 12 Pro 4G", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 11 Pro", "Poco X4 Pro"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 12 Pro 5G", "marca": "Xiaomi", "modelos_compativeis": ["Poco F3", "Poco X5 Pro", "Realme 12 Plus"], "total_compativeis": 3}, {"modelo_principal": "Redmi Note 12 Turbo", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 13 5G", "Redmi Note 13 Pro 4G", "Redmi Note 13 Pro 5G", "Redmi Note 13R Pro", "Poco X6", "Poco X6 Pro", "Poco M6 Pro", "Poco F5"], "total_compativeis": 8}, {"modelo_principal": "Redmi Note 13 4G", "marca": "Xiaomi", "modelos_compativeis": ["Poco F5 Pro"], "total_compativeis": 1}, {"modelo_principal": "Redmi Note 13 5G", "marca": "Xiaomi", "modelos_compativeis": ["Note 13 Pro 4G", "Note 13 Pro 5G", "Note 13R Pro", "Note 12 Turbo", "Poco X6", "Poco X6 Pro", "Poco M6 Pro", "Poco F5"], "total_compativeis": 8}, {"modelo_principal": "Redmi Note 13 Pro 4G", "marca": "Xiaomi", "modelos_compativeis": ["13 5G", "13 Pro 5G", "13R Pro", "12 Turbo", "Poco X6", "X6 Pro", "M6 Pro", "F5"], "total_compativeis": 8}, {"modelo_principal": "Redmi Note 13 Pro 5G", "marca": "Xiaomi", "modelos_compativeis": ["Note 13 Pro 4G", "Note 13 5G", "Note 13R Pro", "Note 12 Turbo", "Poco X6", "X6 Pro", "M6 Pro", "F5"], "total_compativeis": 8}, {"modelo_principal": "Redmi Note 14 4G", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi Mi 11i", "Poco X5 Pro", "Poco F3", "Realme 13 4G", "Realme 12 Plus", "Oppo Reno 12F 4G", "Oppo Reno 12F"], "total_compativeis": 7}, {"modelo_principal": "Redmi Note 14 Pro 5G", "marca": "Xiaomi", "modelos_compativeis": ["Note 14 Pro Plus 5G", "Poco X7"], "total_compativeis": 2}, {"modelo_principal": "Redmi Note 14 Pro Plus 5G", "marca": "Xiaomi", "modelos_compativeis": ["Note 14 Pro 5G", "Poco X7"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi 9 SE", "marca": "Xiaomi", "modelos_compativeis": ["A01", "Mi Play"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi 11T Pro", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 11 Pro"], "total_compativeis": 1}, {"modelo_principal": "Xiaomi 11 Lite NE", "marca": "Xiaomi", "modelos_compativeis": ["Mi 11 Lite 5G", "Mi 11 Lite", "Realme X7 Pro"], "total_compativeis": 3}, {"modelo_principal": "Xiaomi 12T", "marca": "Xiaomi", "modelos_compativeis": ["12T Pro", "Poco F4"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi 12X", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi 12"], "total_compativeis": 1}, {"modelo_principal": "Xiaomi 12 Lite", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 11"], "total_compativeis": 1}, {"modelo_principal": "Xiaomi 13", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi 14", "Xiaomi 15"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi 13T", "marca": "Xiaomi", "modelos_compativeis": ["13T Pro", "Redmi note 13 Pro"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi 13 Lite", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi Civi 2", "Civi 3"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi 14", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi 13", "Xiaomi 15"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi 14T", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi 14T Pro", "Redmi Note 13 Pro 4G", "Redmi K70E", "Poco X6", "Poco X6 Pro", "Poco F6"], "total_compativeis": 6}, {"modelo_principal": "Xiaomi 14T Pro", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi 14T", "Note 13 Pro 4G", "Redmi K70E", "Poco X6", "Poco X6 Pro", "Poco F6"], "total_compativeis": 6}, {"modelo_principal": "Xiaomi 15", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi 14", "Xiaomi 15"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Civi 2", "marca": "Xiaomi", "modelos_compativeis": ["Civi 3", "Xiaomi 13 Lite"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Civi 3", "marca": "Xiaomi", "modelos_compativeis": ["Civi 2", "Xiaomi 13 Lite"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Mi 8", "marca": "Xiaomi", "modelos_compativeis": ["Mi 8 Pro"], "total_compativeis": 1}, {"modelo_principal": "Xiaomi Mi 9", "marca": "Xiaomi", "modelos_compativeis": ["Mi 9 Lite", "Mi 9 Pro 5G"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Mi 9 Lite", "marca": "Xiaomi", "modelos_compativeis": ["Xiaomi Mi CC9", "Xiaomi Mi 9 Pro", "Xiaomi MI 9", "Huawei Nova 5"], "total_compativeis": 4}, {"modelo_principal": "Xiaomi Mi 10", "marca": "Xiaomi", "modelos_compativeis": ["Mi 10 Pro", "Mi 10 Ultra", "Mi 10S"], "total_compativeis": 3}, {"modelo_principal": "Xiaomi Mi 10S", "marca": "Xiaomi", "modelos_compativeis": ["Mi 10", "Mi 10 Pro", "Mi 10 Ultra"], "total_compativeis": 3}, {"modelo_principal": "Xiaomi Mi 10T Lite", "marca": "Xiaomi", "modelos_compativeis": ["Note 9 Pro 5G", "Poco M2 Pro"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Mi 10 Lite", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 10X Pro", "10X 5G"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Mi 10 Pro", "marca": "Xiaomi", "modelos_compativeis": ["Mi 10", "Mi 10 Ultra", "Mi 10S"], "total_compativeis": 3}, {"modelo_principal": "Xiaomi Mi 10 Ultra", "marca": "Xiaomi", "modelos_compativeis": ["Mi 10", "Mi 10 Pro", "Mi 10S"], "total_compativeis": 3}, {"modelo_principal": "Xiaomi Mi 11", "marca": "Xiaomi", "modelos_compativeis": ["Mi 11 Pro", "Mi 11 Ultra"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Mi A1", "marca": "Xiaomi", "modelos_compativeis": ["K10 Power", "Note 5A Prime"], "total_compativeis": 2}, {"modelo_principal": "Xiaomi Mi A2", "marca": "Xiaomi", "modelos_compativeis": ["Redmi Note 5", "Redmi 5 Plus", "A8 Plus", "J8", "S2"], "total_compativeis": 5}, {"modelo_principal": "Xiaomi Mi A2 Lite", "marca": "Xiaomi", "modelos_compativeis": ["Redmi 6 Pro"], "total_compativeis": 1}, {"modelo_principal": "Xiaomi Mi Go", "marca": "Xiaomi", "modelos_compativeis": ["J2 Core"], "total_compativeis": 1}, {"modelo_principal": "Xiaomi Poco C55", "marca": "Xiaomi", "modelos_compativeis": ["Poco C40", "Poco C61", "Redmi 10C", "Redmi 10 Power", "Redmi 12C", "Redmi A3"], "total_compativeis": 6}, {"modelo_principal": "Moto E4", "marca": "Motorola", "modelos_compativeis": ["Moto G5"], "total_compativeis": 1}, {"modelo_principal": "Moto E4 Plus", "marca": "Motorola", "modelos_compativeis": ["Moto G5s Plus"], "total_compativeis": 1}, {"modelo_principal": "Moto E5", "marca": "Motorola", "modelos_compativeis": ["Moto G6 Play"], "total_compativeis": 1}, {"modelo_principal": "Moto E6i", "marca": "Motorola", "modelos_compativeis": ["E6 Plus", "E6s"], "total_compativeis": 2}, {"modelo_principal": "Moto E6S", "marca": "Motorola", "modelos_compativeis": ["E6i", "E6 Plus"], "total_compativeis": 2}, {"modelo_principal": "Moto E6 Plus", "marca": "Motorola", "modelos_compativeis": ["E6i", "E6s"], "total_compativeis": 2}, {"modelo_principal": "Moto E7", "marca": "Motorola", "modelos_compativeis": ["E7 Plus", "E7i Power", "E20", "G10", "G10 Power", "G20", "G30", "One Fusion"], "total_compativeis": 8}, {"modelo_principal": "Moto E7 Plus", "marca": "Motorola", "modelos_compativeis": ["E7 Power", "E20", "G8 Power Lite", "G10", "G20", "G30"], "total_compativeis": 6}, {"modelo_principal": "Moto E7 Power", "marca": "Motorola", "modelos_compativeis": ["E7 plus", "E20", "G8 Power Lite", "G10", "G20", "G30"], "total_compativeis": 6}, {"modelo_principal": "Moto E13", "marca": "Motorola", "modelos_compativeis": ["Moto E20", "Moto E7 Plus", "Samsung A12"], "total_compativeis": 3}, {"modelo_principal": "Moto E14", "marca": "Motorola", "modelos_compativeis": ["E22s", "G24 Power", "G24", "G04"], "total_compativeis": 4}, {"modelo_principal": "Moto E20", "marca": "Motorola", "modelos_compativeis": ["E7 Plus", "E7 Power", "Moto G30", "Moto G20", "G10 Power", "G8 Power Lite"], "total_compativeis": 6}, {"modelo_principal": "Moto E22", "marca": "Motorola", "modelos_compativeis": ["E22i", "E13", "A03", "One Fusion"], "total_compativeis": 4}, {"modelo_principal": "Moto E22S", "marca": "Motorola", "modelos_compativeis": ["Moto G 2023", "G22"], "total_compativeis": 2}, {"modelo_principal": "Moto E30", "marca": "Motorola", "modelos_compativeis": ["Moto E40", "Moto G 2022"], "total_compativeis": 2}, {"modelo_principal": "Moto E32", "marca": "Motorola", "modelos_compativeis": ["E32s", "G04", "G04s", "G22", "G24", "G24 Power", "E22s"], "total_compativeis": 7}, {"modelo_principal": "Moto E32S", "marca": "Motorola", "modelos_compativeis": ["E32", "G04", "G04s", "G22", "G24", "G24 Power", "E22s"], "total_compativeis": 7}, {"modelo_principal": "Moto E40", "marca": "Motorola", "modelos_compativeis": ["Moto E30"], "total_compativeis": 1}, {"modelo_principal": "Moto G1", "marca": "Motorola", "modelos_compativeis": ["Moto G1 Dual"], "total_compativeis": 1}, {"modelo_principal": "Moto G2", "marca": "Motorola", "modelos_compativeis": ["Moto G3"], "total_compativeis": 1}, {"modelo_principal": "Moto G3", "marca": "Motorola", "modelos_compativeis": ["Moto G2"], "total_compativeis": 1}, {"modelo_principal": "Moto G04", "marca": "Motorola", "modelos_compativeis": ["G04s", "G22", "G24", "G24 Power", "G34", "E32", "Infinix Smart 8"], "total_compativeis": 7}, {"modelo_principal": "Moto G04s", "marca": "Motorola", "modelos_compativeis": ["G04", "G22", "G24", "G24 Power", "G34", "E32"], "total_compativeis": 6}, {"modelo_principal": "Moto G05", "marca": "Motorola", "modelos_compativeis": ["G15", "G35", "G56", "Edge 20 Lite", "Note 9S", "Note 9 Pro"], "total_compativeis": 6}, {"modelo_principal": "Moto G 5G Plus", "marca": "Motorola", "modelos_compativeis": ["Moto G100", "Moto Edge S"], "total_compativeis": 2}, {"modelo_principal": "Moto G5S", "marca": "Motorola", "modelos_compativeis": ["Moto G5 Plus"], "total_compativeis": 1}, {"modelo_principal": "Moto G5S Plus", "marca": "Motorola", "modelos_compativeis": ["E4 Plus"], "total_compativeis": 1}, {"modelo_principal": "Moto G5 Plus", "marca": "Motorola", "modelos_compativeis": ["Moto G5S"], "total_compativeis": 1}, {"modelo_principal": "Moto G6 Play", "marca": "Motorola", "modelos_compativeis": ["E5"], "total_compativeis": 1}, {"modelo_principal": "Moto G7", "marca": "Motorola", "modelos_compativeis": ["G7 Plus", "G8 Play", "G8 Plus", "One Macro"], "total_compativeis": 4}, {"modelo_principal": "Moto G7 Plus", "marca": "Motorola", "modelos_compativeis": ["One Vision Plus"], "total_compativeis": 1}, {"modelo_principal": "Moto G8", "marca": "Motorola", "modelos_compativeis": ["One Hyper", "One Fusion Plus", "A11", "M11", "Note 9 5G"], "total_compativeis": 5}, {"modelo_principal": "Moto G8 Play", "marca": "Motorola", "modelos_compativeis": ["Moto G7", "Moto G8 Plus", "Moto One Macro"], "total_compativeis": 3}, {"modelo_principal": "Moto G8 plus", "marca": "Motorola", "modelos_compativeis": ["G7", "E6 Plus"], "total_compativeis": 2}, {"modelo_principal": "Moto G8 Power Lite", "marca": "Motorola", "modelos_compativeis": ["G10 Power", "G20", "E20", "E7 Power", "E7 Plus", "One Fusion", "Redmi 9A", "Redmi 9C"], "total_compativeis": 8}, {"modelo_principal": "Moto G9 Play", "marca": "Motorola", "modelos_compativeis": ["G10", "G20", "G30", "E7 Plus"], "total_compativeis": 4}, {"modelo_principal": "Moto G9 Plus", "marca": "Motorola", "modelos_compativeis": ["Moto G Stylus 2021"], "total_compativeis": 1}, {"modelo_principal": "Moto G10", "marca": "Motorola", "modelos_compativeis": ["G20", "G30", "G9 Play", "G10 Power", "E7 Plus", "E7 Power", "E20", "One Fusion", "Redmi 9A"], "total_compativeis": 9}, {"modelo_principal": "Moto G13", "marca": "Motorola", "modelos_compativeis": ["G23", "G34"], "total_compativeis": 2}, {"modelo_principal": "Moto G14", "marca": "Motorola", "modelos_compativeis": ["G32", "G54", "G55", "G62", "G64", "G73"], "total_compativeis": 6}, {"modelo_principal": "Moto G15", "marca": "Motorola", "modelos_compativeis": ["Moto G15 Power", "Moto G75"], "total_compativeis": 2}, {"modelo_principal": "Moto G17", "marca": "Motorola", "modelos_compativeis": ["G15", "G15 Power"], "total_compativeis": 2}, {"modelo_principal": "Moto G22", "marca": "Motorola", "modelos_compativeis": ["G04", "G04s", "G24", "G24 Power", "G 2023", "E32", "E32s", "E22s", "E14"], "total_compativeis": 9}, {"modelo_principal": "Moto G23", "marca": "Motorola", "modelos_compativeis": ["G13", "G34", "G53"], "total_compativeis": 3}, {"modelo_principal": "Moto G24", "marca": "Motorola", "modelos_compativeis": ["G04", "G04s", "G22", "G24 Power", "G34", "E32"], "total_compativeis": 6}, {"modelo_principal": "Moto G24 Power", "marca": "Motorola", "modelos_compativeis": ["G04", "G04s", "G22", "G24", "G34", "E32"], "total_compativeis": 6}, {"modelo_principal": "Moto G31", "marca": "Motorola", "modelos_compativeis": ["G41"], "total_compativeis": 1}, {"modelo_principal": "Moto G32", "marca": "Motorola", "modelos_compativeis": ["G14", "G54", "G62", "G64", "G73"], "total_compativeis": 5}, {"modelo_principal": "Moto G34", "marca": "Motorola", "modelos_compativeis": ["G23", "G13"], "total_compativeis": 2}, {"modelo_principal": "Moto G35", "marca": "Motorola", "modelos_compativeis": ["G75", "G15", "Moto G Power 2024"], "total_compativeis": 3}, {"modelo_principal": "Moto G40 Fusion", "marca": "Motorola", "modelos_compativeis": ["G60", "G60s"], "total_compativeis": 2}, {"modelo_principal": "Moto G41", "marca": "Motorola", "modelos_compativeis": ["G31"], "total_compativeis": 1}, {"modelo_principal": "Moto G42", "marca": "Motorola", "modelos_compativeis": ["G72", "G71", "Redmi Note 11"], "total_compativeis": 3}, {"modelo_principal": "Moto G50", "marca": "Motorola", "modelos_compativeis": ["G10", "G10 Power", "G20", "G30", "One Fusion", "E7 Plus", "K41S", "A02s", "Poco C3"], "total_compativeis": 9}, {"modelo_principal": "Moto G51", "marca": "Motorola", "modelos_compativeis": ["Moto G40 Fusion", "G60", "G60s"], "total_compativeis": 3}, {"modelo_principal": "Moto G52", "marca": "Motorola", "modelos_compativeis": ["G82"], "total_compativeis": 1}, {"modelo_principal": "Moto G53", "marca": "Motorola", "modelos_compativeis": ["G34", "G23", "G13"], "total_compativeis": 3}, {"modelo_principal": "Moto G54", "marca": "Motorola", "modelos_compativeis": ["G14", "G32", "G53", "G62", "G64", "G73"], "total_compativeis": 6}, {"modelo_principal": "Moto G56", "marca": "Motorola", "modelos_compativeis": ["G75", "G35", "G15", "G05"], "total_compativeis": 4}, {"modelo_principal": "Moto G60", "marca": "Motorola", "modelos_compativeis": ["G60s", "G40 Fusion"], "total_compativeis": 2}, {"modelo_principal": "Moto G62", "marca": "Motorola", "modelos_compativeis": ["G14", "G32", "G54", "G73"], "total_compativeis": 4}, {"modelo_principal": "Moto G64", "marca": "Motorola", "modelos_compativeis": ["G62", "G55", "G54", "G32"], "total_compativeis": 4}, {"modelo_principal": "Moto G71", "marca": "Motorola", "modelos_compativeis": ["G31", "G41"], "total_compativeis": 2}, {"modelo_principal": "Moto G71S", "marca": "Motorola", "modelos_compativeis": ["G82", "Edge 2022"], "total_compativeis": 2}, {"modelo_principal": "Moto G72", "marca": "Motorola", "modelos_compativeis": ["G52", "Redmi Note 11", "Redmi Note 10"], "total_compativeis": 3}, {"modelo_principal": "Moto G73", "marca": "Motorola", "modelos_compativeis": ["G14", "G32", "G54", "G55", "G62", "G64"], "total_compativeis": 6}, {"modelo_principal": "Moto G82", "marca": "Motorola", "modelos_compativeis": ["G52", "Edge 2022"], "total_compativeis": 2}, {"modelo_principal": "Moto G84", "marca": "Motorola", "modelos_compativeis": ["Edge 30", "G54", "G14"], "total_compativeis": 3}, {"modelo_principal": "Moto G85", "marca": "Motorola", "modelos_compativeis": ["Edge Plus", "Edge 30 Ultra"], "total_compativeis": 2}, {"modelo_principal": "Moto G100", "marca": "Motorola", "modelos_compativeis": ["Moto G 5G Plus", "Edge S"], "total_compativeis": 2}, {"modelo_principal": "Moto G200", "marca": "Motorola", "modelos_compativeis": ["G60", "G60s"], "total_compativeis": 2}, {"modelo_principal": "Moto G 2023", "marca": "Motorola", "modelos_compativeis": ["G22", "E32s", "E22s"], "total_compativeis": 3}, {"modelo_principal": "Moto G Stylus 2023", "marca": "Motorola", "modelos_compativeis": ["G13"], "total_compativeis": 1}, {"modelo_principal": "Moto One Action", "marca": "Motorola", "modelos_compativeis": ["One Vision"], "total_compativeis": 1}, {"modelo_principal": "Moto One Fusion", "marca": "Motorola", "modelos_compativeis": ["E7", "E7 Plus", "E7i Power", "G10", "G10 Power", "G20", "G30", "Redmi 9A", "Redmi 9C"], "total_compativeis": 9}, {"modelo_principal": "Moto One Fusion Plus", "marca": "Motorola", "modelos_compativeis": ["One Hyper"], "total_compativeis": 1}, {"modelo_principal": "Moto One Hyper", "marca": "Motorola", "modelos_compativeis": ["One Fusion Plus"], "total_compativeis": 1}, {"modelo_principal": "Moto One Macro", "marca": "Motorola", "modelos_compativeis": ["G7", "G7 Plus", "G8 Plus", "G8 Play"], "total_compativeis": 4}, {"modelo_principal": "Moto One Vision", "marca": "Motorola", "modelos_compativeis": ["One Action"], "total_compativeis": 1}, {"modelo_principal": "Moto One Zoom", "marca": "Motorola", "modelos_compativeis": ["Note 7", "Note 8", "Samsung A20", "A30", "A50", "A50s"], "total_compativeis": 6}, {"modelo_principal": "Moto X30 Pro", "marca": "Motorola", "modelos_compativeis": ["X40", "G85"], "total_compativeis": 2}, {"modelo_principal": "Moto X50 Ultra", "marca": "Motorola", "modelos_compativeis": ["Edge 50 Ultra", "Edge 50 Pro"], "total_compativeis": 2}, {"modelo_principal": "Motorola Edge 20", "marca": "Motorola", "modelos_compativeis": ["Edge 20 Pro"], "total_compativeis": 1}, {"modelo_principal": "Motorola Edge 20 Lite", "marca": "Motorola", "modelos_compativeis": ["Redmi Note 12", "Note 9 Pro 5G", "Poco X5", "Poco M2 Pro", "LG Q92"], "total_compativeis": 5}, {"modelo_principal": "Motorola Edge 20 Lite", "marca": "Motorola", "modelos_compativeis": ["Note 12", "Poco X5", "Poco M2 Pro"], "total_compativeis": 3}, {"modelo_principal": "Motorola Edge 30", "marca": "Motorola", "modelos_compativeis": ["Moto X30 Pro"], "total_compativeis": 1}, {"modelo_principal": "Motorola Edge 30 Ultra", "marca": "Motorola", "modelos_compativeis": ["Edge Plus", "Edge 40 Pro"], "total_compativeis": 2}, {"modelo_principal": "Motorola Edge 40", "marca": "Motorola", "modelos_compativeis": ["Edge 30 Fusion", "Moto S30 Pro"], "total_compativeis": 2}, {"modelo_principal": "Motorola Edge 40 pro", "marca": "Motorola", "modelos_compativeis": ["Edge Plus"], "total_compativeis": 1}, {"modelo_principal": "Motorola Edge 50", "marca": "Motorola", "modelos_compativeis": ["Edge 50 Pro", "Edge X50 Ultra", "Edge Ultra"], "total_compativeis": 3}, {"modelo_principal": "Motorola Edge 50 Fusion", "marca": "Motorola", "modelos_compativeis": ["Edge 40 Pro", "X40", "G85"], "total_compativeis": 3}, {"modelo_principal": "Motorola Edge 50 Pro", "marca": "Motorola", "modelos_compativeis": ["Edge 50 Ultra", "Edge 60", "Edge 60 Pro", "Edge 2025", "Moto X50 Ultra"], "total_compativeis": 5}, {"modelo_principal": "Motorola Edge 50 Ultra", "marca": "Motorola", "modelos_compativeis": ["Edge 50 Pro", "Edge 60", "Edge 60 Pro", "Edge 2025", "Moto X50 Ultra"], "total_compativeis": 5}, {"modelo_principal": "Motorola Edge 60", "marca": "Motorola", "modelos_compativeis": ["Edge 60 Pro", "Edge 50 Pro", "Edge 50 Ultra", "Edge 2025", "Moto X50 Ultra"], "total_compativeis": 5}, {"modelo_principal": "Motorola Edge Plus", "marca": "Motorola", "modelos_compativeis": ["Edge 30 Ultra"], "total_compativeis": 1}, {"modelo_principal": "Motorola Edge S", "marca": "Motorola", "modelos_compativeis": ["Moto G100", "Moto G 5G Plus"], "total_compativeis": 2}, {"modelo_principal": "iPhone 5", "marca": "iPhone", "modelos_compativeis": ["5S", "5G", "SE 2016"], "total_compativeis": 3}, {"modelo_principal": "iPhone 6", "marca": "iPhone", "modelos_compativeis": ["6G", "6S", "7"], "total_compativeis": 3}, {"modelo_principal": "iPhone 6 Plus", "marca": "iPhone", "modelos_compativeis": ["6S Plus", "7 Plus"], "total_compativeis": 2}, {"modelo_principal": "iPhone 7", "marca": "iPhone", "modelos_compativeis": ["8", "6S"], "total_compativeis": 2}, {"modelo_principal": "iPhone 7 Plus", "marca": "iPhone", "modelos_compativeis": ["8 Plus", "6S Plus"], "total_compativeis": 2}, {"modelo_principal": "iPhone 8", "marca": "iPhone", "modelos_compativeis": ["7", "6S", "SE 2020"], "total_compativeis": 3}, {"modelo_principal": "iPhone 8 Plus", "marca": "iPhone", "modelos_compativeis": ["7 Plus", "6S Plus"], "total_compativeis": 2}, {"modelo_principal": "iPhone 11", "marca": "iPhone", "modelos_compativeis": ["XR"], "total_compativeis": 1}, {"modelo_principal": "iPhone 11 Pro", "marca": "iPhone", "modelos_compativeis": ["X", "XS"], "total_compativeis": 2}, {"modelo_principal": "iPhone 12", "marca": "iPhone", "modelos_compativeis": ["12 Pro"], "total_compativeis": 1}, {"modelo_principal": "iPhone 13", "marca": "iPhone", "modelos_compativeis": ["13 Pro", "14", "16E", "17e"], "total_compativeis": 4}, {"modelo_principal": "iPhone 13 Pro", "marca": "iPhone", "modelos_compativeis": ["13", "14", "17e"], "total_compativeis": 3}, {"modelo_principal": "iPhone 13 Pro Max", "marca": "iPhone", "modelos_compativeis": ["iPhone 14 Pro Max"], "total_compativeis": 1}, {"modelo_principal": "iPhone 14", "marca": "iPhone", "modelos_compativeis": ["13", "13 Pro", "17e"], "total_compativeis": 3}, {"modelo_principal": "iPhone 14 Plus", "marca": "iPhone", "modelos_compativeis": ["13 Pro Max"], "total_compativeis": 1}, {"modelo_principal": "iPhone 14 Pro", "marca": "iPhone", "modelos_compativeis": ["15", "15 Pro"], "total_compativeis": 2}, {"modelo_principal": "iPhone 14 Pro Max", "marca": "iPhone", "modelos_compativeis": ["13 Pro Max", "15 Plus"], "total_compativeis": 2}, {"modelo_principal": "iPhone 15", "marca": "iPhone", "modelos_compativeis": ["15 Pro", "16", "14 Pro"], "total_compativeis": 3}, {"modelo_principal": "iPhone 15 Plus", "marca": "iPhone", "modelos_compativeis": ["15 Pro Max", "16 Plus", "14 Pro Max"], "total_compativeis": 3}, {"modelo_principal": "iPhone 15 Pro", "marca": "iPhone", "modelos_compativeis": ["15", "16", "14 Pro"], "total_compativeis": 3}, {"modelo_principal": "iPhone 15 Pro Max", "marca": "iPhone", "modelos_compativeis": ["15 Plus", "14 Pro Max", "16 Plus"], "total_compativeis": 3}, {"modelo_principal": "iPhone 16", "marca": "iPhone", "modelos_compativeis": ["15", "15 Pro", "14 Pro"], "total_compativeis": 3}, {"modelo_principal": "iPhone 16E", "marca": "iPhone", "modelos_compativeis": ["14", "13", "13 Pro"], "total_compativeis": 3}, {"modelo_principal": "Iphone 16 Plus", "marca": "iPhone", "modelos_compativeis": ["15 Plus", "14 Pro Max"], "total_compativeis": 2}, {"modelo_principal": "iPhone 16 Pro", "marca": "iPhone", "modelos_compativeis": ["iPhone 17", "17 Pro"], "total_compativeis": 2}, {"modelo_principal": "iPhone 16 Pro Max", "marca": "iPhone", "modelos_compativeis": ["17 Pro Max"], "total_compativeis": 1}, {"modelo_principal": "iPhone 17", "marca": "iPhone", "modelos_compativeis": ["16 Pro"], "total_compativeis": 1}, {"modelo_principal": "iPhone 17 Pro Max", "marca": "iPhone", "modelos_compativeis": ["16 Pro Max"], "total_compativeis": 1}, {"modelo_principal": "iPhone SE 2016", "marca": "iPhone", "modelos_compativeis": ["5", "5C", "5S"], "total_compativeis": 3}, {"modelo_principal": "iPhone SE 2020", "marca": "iPhone", "modelos_compativeis": ["SE 2022", "6S", "7", "8"], "total_compativeis": 4}, {"modelo_principal": "iPhone SE 2022", "marca": "iPhone", "modelos_compativeis": ["SE 2020", "8- 7- 6", "6S"], "total_compativeis": 3}, {"modelo_principal": "iPhone X", "marca": "iPhone", "modelos_compativeis": ["XS", "11 Pro"], "total_compativeis": 2}, {"modelo_principal": "iPhone XR", "marca": "iPhone", "modelos_compativeis": ["11"], "total_compativeis": 1}, {"modelo_principal": "iPhone XS", "marca": "iPhone", "modelos_compativeis": ["IPhone X", "11 Pro"], "total_compativeis": 2}, {"modelo_principal": "iPhone XS Max", "marca": "iPhone", "modelos_compativeis": ["11 Pro Max"], "total_compativeis": 1}, {"modelo_principal": "LG K4 2017", "marca": "LG", "modelos_compativeis": ["K9 TV"], "total_compativeis": 1}, {"modelo_principal": "LG K8 2018", "marca": "LG", "modelos_compativeis": ["K9 TV"], "total_compativeis": 1}, {"modelo_principal": "LG K8 Plus", "marca": "LG", "modelos_compativeis": ["K20"], "total_compativeis": 1}, {"modelo_principal": "LG K9 TV", "marca": "LG", "modelos_compativeis": ["K4 2017", "K8 2018"], "total_compativeis": 2}, {"modelo_principal": "LG K10", "marca": "LG", "modelos_compativeis": ["K8"], "total_compativeis": 1}, {"modelo_principal": "LG K10 2017", "marca": "LG", "modelos_compativeis": ["K11", "K11 Plus"], "total_compativeis": 2}, {"modelo_principal": "LG K11", "marca": "LG", "modelos_compativeis": ["K11 Plus", "K10 2017"], "total_compativeis": 2}, {"modelo_principal": "LG K11 Plus", "marca": "LG", "modelos_compativeis": ["LG K11", "K11 2017"], "total_compativeis": 2}, {"modelo_principal": "LG K12 Max", "marca": "LG", "modelos_compativeis": ["K12 Prime"], "total_compativeis": 1}, {"modelo_principal": "LG K12 Plus", "marca": "LG", "modelos_compativeis": ["K40"], "total_compativeis": 1}, {"modelo_principal": "LG K20", "marca": "LG", "modelos_compativeis": ["K8 Plus"], "total_compativeis": 1}, {"modelo_principal": "LG K22", "marca": "LG", "modelos_compativeis": ["K22 Plus", "A10s", "A20", "A30"], "total_compativeis": 4}, {"modelo_principal": "LG K22 Plus", "marca": "LG", "modelos_compativeis": ["K22", "A10s", "A20", "A30"], "total_compativeis": 4}, {"modelo_principal": "LG K31", "marca": "LG", "modelos_compativeis": ["LG Q31"], "total_compativeis": 1}, {"modelo_principal": "LG K40S", "marca": "LG", "modelos_compativeis": ["A10", "M10", "E6S", "E6 Plus"], "total_compativeis": 4}, {"modelo_principal": "LG K41S", "marca": "LG", "modelos_compativeis": ["K50s", "One Fusion"], "total_compativeis": 2}, {"modelo_principal": "LG K42", "marca": "LG", "modelos_compativeis": ["K52", "K62", "K62 Plus"], "total_compativeis": 3}, {"modelo_principal": "LG K50S", "marca": "LG", "modelos_compativeis": ["K41S"], "total_compativeis": 1}, {"modelo_principal": "LG K51S", "marca": "LG", "modelos_compativeis": ["K61", "Mi 10T"], "total_compativeis": 2}, {"modelo_principal": "LG K52", "marca": "LG", "modelos_compativeis": ["K42", "K62 Plus", "A71"], "total_compativeis": 3}, {"modelo_principal": "LG K61", "marca": "LG", "modelos_compativeis": ["K51S", "Mi 10T"], "total_compativeis": 2}, {"modelo_principal": "LG K62", "marca": "LG", "modelos_compativeis": ["K62 Plus", "K42", "K52"], "total_compativeis": 3}, {"modelo_principal": "LG K62 Plus", "marca": "LG", "modelos_compativeis": ["K62", "K42", "K52"], "total_compativeis": 3}, {"modelo_principal": "LG Q6 Plus", "marca": "LG", "modelos_compativeis": ["Q7 Plus"], "total_compativeis": 1}, {"modelo_principal": "LG Q31", "marca": "LG", "modelos_compativeis": ["LG K31"], "total_compativeis": 1}, {"modelo_principal": "Asus Rog Phone 3", "marca": "Asus", "modelos_compativeis": ["Rog Phone 3 Strix Edition"], "total_compativeis": 1}, {"modelo_principal": "Asus Rog Phone 5", "marca": "Asus", "modelos_compativeis": ["Rog Phone 5 Pro", "Rog Phone 5S", "Rog Phone 5S Pro", "Rog Phone 5 Ultimate", "Snapdragon Insiders"], "total_compativeis": 5}, {"modelo_principal": "Asus Rog Phone 6", "marca": "Asus", "modelos_compativeis": ["Rog Phone 6 Batman Edition", "Rog Phone 6D", "Rog Phone 6 Pro", "Rog Phone 6 Ultimate", "Rog Phone 7"], "total_compativeis": 5}, {"modelo_principal": "Asus Rog Phone 7", "marca": "Asus", "modelos_compativeis": ["Rog Phone 6", "Rog Phone 6 Batman Edition", "Rog Phone 6D", "Rog Phone 6 Pro", "Rog Phone 6 Ultimate"], "total_compativeis": 5}, {"modelo_principal": "Asus Zenfone 2", "marca": "Asus", "modelos_compativeis": ["Zenfone 2 Laser", "Zenfone 2 Deluxe", "Zenfone 2 Deluxe Special Edition"], "total_compativeis": 3}, {"modelo_principal": "Asus Zenfone 3 Max (5.5)", "marca": "Asus", "modelos_compativeis": ["Zenfone 3 Laser"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone 4 Selfie", "marca": "Asus", "modelos_compativeis": ["Zenfone Selfie"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone 5", "marca": "Asus", "modelos_compativeis": ["Zenfone 5Z"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone 5 Selfie", "marca": "Asus", "modelos_compativeis": ["Zenfone 5 Selfie Pro", "J4 Plus"], "total_compativeis": 2}, {"modelo_principal": "Asus Zenfone 6", "marca": "Asus", "modelos_compativeis": ["Moto One Hyper"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone 7", "marca": "Asus", "modelos_compativeis": ["Zenfone 7 Pro", "Zenfone 8 Flip", "Note 11 Pro"], "total_compativeis": 3}, {"modelo_principal": "Asus Zenfone 7 Pro", "marca": "Asus", "modelos_compativeis": ["Asus Zenfone 7", "Zenfone 8 Flip", "Note 11 Pro"], "total_compativeis": 3}, {"modelo_principal": "Asus Zenfone 8", "marca": "Asus", "modelos_compativeis": ["Zenfone 9"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone 8 Flip", "marca": "Asus", "modelos_compativeis": ["Zenfone 7", "Zenfone 7 Pro"], "total_compativeis": 2}, {"modelo_principal": "Asus Zenfone 9", "marca": "Asus", "modelos_compativeis": ["Zenfone 10"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone Max", "marca": "Asus", "modelos_compativeis": ["Zenfone Max 2016"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone Max 3", "marca": "Asus", "modelos_compativeis": ["Lenovo K8", "Lenovo K8 Plus"], "total_compativeis": 2}, {"modelo_principal": "Asus Zenfone Max (M1)", "marca": "Asus", "modelos_compativeis": ["Zenfone Max (M2)", "Zenfone Max (M3)", "Zenfone Live (L1)", "Zenfone Live (L2)", "Zenfone Lite (L1)"], "total_compativeis": 5}, {"modelo_principal": "Asus ZenFone Max Plus (M2)", "marca": "Asus", "modelos_compativeis": ["ZenFone Max Shot"], "total_compativeis": 1}, {"modelo_principal": "Asus Zenfone Max Shot", "marca": "Asus", "modelos_compativeis": ["Max Pro (M2)", "Max Plus (M2)"], "total_compativeis": 2}, {"modelo_principal": "Asus Zenfone Shot Plus", "marca": "Asus", "modelos_compativeis": ["Zenfone Max Shot", "Zenfone Max Plus (M2)"], "total_compativeis": 2}, {"modelo_principal": "Realme 6", "marca": "Realme", "modelos_compativeis": ["Realme 6S", "Realme 7", "Realme 7 5G", "Narzo 30 Pro", "Redmi K30 Ultra"], "total_compativeis": 5}, {"modelo_principal": "Realme 7", "marca": "Realme", "modelos_compativeis": ["Realme 7 5G", "Realme 8 5G", "Narzo 30", "Narzo 30 Pro", "Redmi K30 Ultra"], "total_compativeis": 5}, {"modelo_principal": "Realme 7i Ásia", "marca": "Realme", "modelos_compativeis": ["Realme C17", "Realme Q3s"], "total_compativeis": 2}, {"modelo_principal": "Realme 7i Global", "marca": "Realme", "modelos_compativeis": ["Realme C21Y", "C25s", "Narzo 50i", "Samsung A12", "M12", "A32 5G"], "total_compativeis": 6}, {"modelo_principal": "Realme 8", "marca": "Realme", "modelos_compativeis": ["Realme 8 Pro"], "total_compativeis": 1}, {"modelo_principal": "Realme 8S", "marca": "Realme", "modelos_compativeis": ["Realme 8 5G", "Realme Q3i", "Realme V13"], "total_compativeis": 3}, {"modelo_principal": "Realme 8 Pro", "marca": "Realme", "modelos_compativeis": ["Realme 8", "Oppo Reno 7 5G"], "total_compativeis": 2}, {"modelo_principal": "Realme 9", "marca": "Realme", "modelos_compativeis": ["Realme 9 Pro Plus"], "total_compativeis": 1}, {"modelo_principal": "Realme 9i", "marca": "Realme", "modelos_compativeis": ["Realme 9 SE", "Realme 9 5G"], "total_compativeis": 2}, {"modelo_principal": "Realme 9 5G", "marca": "Realme", "modelos_compativeis": ["Realme 9 Pro", "Realme 9i", "Realme 9 SE"], "total_compativeis": 3}, {"modelo_principal": "Realme 9 Pro Plus", "marca": "Realme", "modelos_compativeis": ["Realme 9"], "total_compativeis": 1}, {"modelo_principal": "Realme 10", "marca": "Realme", "modelos_compativeis": ["Realme 9", "Realme 9 Pro Plus"], "total_compativeis": 2}, {"modelo_principal": "Realme 10S", "marca": "Realme", "modelos_compativeis": ["Realme 7i", "Realme C35", "Realme Narzo 50A Prime"], "total_compativeis": 3}, {"modelo_principal": "Realme 11 5G", "marca": "Realme", "modelos_compativeis": ["Redmi Note 10 Lite", "Realme C55", "Narzo N55", "11x 5G", "Narzo 60x", "V50s", "12", "Narzo 70x", "13", "Oppo A98", "A1", "F23", "K11x", "A58 4G", "A79", "A2"], "total_compativeis": 16}, {"modelo_principal": "Realme 11 Pro Plus", "marca": "Realme", "modelos_compativeis": ["Oppo A1 Pro", "Oppo A2 Pro", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Reno 11", "Reno 11 Pro"], "total_compativeis": 10}, {"modelo_principal": "Realme 12", "marca": "Realme", "modelos_compativeis": ["C67", "C55", "Narzo N55", "11 5G", "11x 5G", "Narzo 60x", "V50s", "Narzo 70x", "13", "Oppo A98", "A1", "F23", "K11x", "A58 4G", "A79", "A2"], "total_compativeis": 16}, {"modelo_principal": "Realme C11", "marca": "Realme", "modelos_compativeis": ["G9 Play", "Moto G10", "G10 Power", "Moto G20", "Moto G30", "E7 Plus", "E7 Power", "E20", "A13", "K41S", "One Fusion"], "total_compativeis": 11}, {"modelo_principal": "Realme C21Y", "marca": "Realme", "modelos_compativeis": ["Realme C25", "Realme C30", "Realme C30s", "Realme C31", "Realme C33", "Realme C33 2023", "Realme C35", "Realme Narzo 50A", "Samsung A02s", "Samsung A03", "Samsung A03s", "Samsung A03 Core", "Samsung A04s", "Samsung A04e", "Samsung A12", "Samsung A13 5G", "S"], "total_compativeis": 17}, {"modelo_principal": "Realme C30", "marca": "Realme", "modelos_compativeis": ["C30s", "C25", "50A", "C33 2023", "C31", "C21Y", "C33", "Samsung A03 Core", "A12", "A32 5G", "M12", "A03s", "A13 5G", "A03 Core", "A03", "A04s", "A04e", "Moto G20", "One Fusion", "G9 Play", "E20", "Redmi A1"], "total_compativeis": 22}, {"modelo_principal": "Realme C30s", "marca": "Realme", "modelos_compativeis": ["C30", "C25", "50A", "C33 2023", "C31", "C21Y", "C33", "Samsung A03 Core", "A12", "A32 5G", "M12", "A03s", "A13 5G", "A03 Core", "A03", "A04s - A04e", "Moto G20", "One Fusion", "G9 Play", "E20"], "total_compativeis": 20}, {"modelo_principal": "Realme C33", "marca": "Realme", "modelos_compativeis": ["C33 2023", "C21Y", "C25", "C30", "C30s", "C31", "C35", "50A", "Samsung A02", "A02s", "A03", "A03s", "A03 Core", "A04s", "A04e", "A12", "A13 5G", "Samsung A32 5G", "M12", "Moto G9 Play", "Moto G20", "Moto E20", "Moto One Fusion"], "total_compativeis": 23}, {"modelo_principal": "Realme C35", "marca": "Realme", "modelos_compativeis": ["Realme C21Y", "A02", "A02s", "A03", "A03s", "A12", "A32 5G", "M12"], "total_compativeis": 8}, {"modelo_principal": "Realme C51", "marca": "Realme", "modelos_compativeis": ["C53", "Redmi 13C", "A05"], "total_compativeis": 3}, {"modelo_principal": "Realme C53", "marca": "Realme", "modelos_compativeis": ["Realme C51", "Redmi 13C", "A05"], "total_compativeis": 3}, {"modelo_principal": "Realme C55", "marca": "Realme", "modelos_compativeis": ["C67", "13", "12", "11 5G", "11X 5G", "Oppo A79", "Moto G15 Power", "Moto G15"], "total_compativeis": 8}, {"modelo_principal": "Realme C61", "marca": "Realme", "modelos_compativeis": ["C63", "C51", "C51s", "Note 60", "Note 50", "Narzo N63", "Narzo N61", "Redmi 13C", "13C 5G", "13R", "Poco C65", "M6"], "total_compativeis": 12}, {"modelo_principal": "Realme C67", "marca": "Realme", "modelos_compativeis": ["C55", "Narzo N55", "Narzo 60x", "V50s", "12", "Narzo 70x", "Realme 13", "Note 12", "Oppo A98", "Oppo A1", "Oppo F23", "Oppo K11x", "Oppo A58 4G", "Oppo A79", "Oppo A2"], "total_compativeis": 15}, {"modelo_principal": "Realme C75x", "marca": "Realme", "modelos_compativeis": ["Realme C75", "Realme C65 5G"], "total_compativeis": 2}, {"modelo_principal": "Realme GT 2", "marca": "Realme", "modelos_compativeis": ["Realme GT 2 Pro", "Redmi Note 9T", "A21s"], "total_compativeis": 3}, {"modelo_principal": "Realme GT 2 Pro", "marca": "Realme", "modelos_compativeis": ["Redmi Note 9T", "A21s"], "total_compativeis": 2}, {"modelo_principal": "Realme GT Master", "marca": "Realme", "modelos_compativeis": ["Realme 9", "Realme 10"], "total_compativeis": 2}, {"modelo_principal": "Realme Note 50", "marca": "Realme", "modelos_compativeis": ["C53", "C51", "Note 60", "C61", "C63"], "total_compativeis": 5}, {"modelo_principal": "Realme Note 60", "marca": "Realme", "modelos_compativeis": ["Poco M6"], "total_compativeis": 1}, {"modelo_principal": "Oppo A1 Pro", "marca": "Oppo", "modelos_compativeis": ["Oppo A2 Pro", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Reno 11", "Reno 11 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo A2 Pro", "marca": "Oppo", "modelos_compativeis": ["Oppo A1 Pro", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Reno 11", "Reno 11 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo A36", "marca": "Oppo", "modelos_compativeis": ["Oppo A76", "Samsung A21s"], "total_compativeis": 2}, {"modelo_principal": "Oppo A56S", "marca": "Oppo", "modelos_compativeis": ["A58", "A77 5G", "C33", "A02", "A02s", "A03"], "total_compativeis": 6}, {"modelo_principal": "Oppo A58", "marca": "Oppo", "modelos_compativeis": ["A2X", "A1X", "A59", "A17K", "A2M", "A78", "A79", "A58X", "Realme C75"], "total_compativeis": 9}, {"modelo_principal": "Oppo A60", "marca": "Oppo", "modelos_compativeis": ["A80", "A3x 4G", "A3x", "Redmi Note 12 4G", "Moto G05"], "total_compativeis": 5}, {"modelo_principal": "Oppo A76", "marca": "Oppo", "modelos_compativeis": ["Oppo A36", "Samsung A21S"], "total_compativeis": 2}, {"modelo_principal": "Oppo A78", "marca": "Oppo", "modelos_compativeis": ["A56", "A1X", "A58"], "total_compativeis": 3}, {"modelo_principal": "Oppo A98", "marca": "Oppo", "modelos_compativeis": ["Realme C55", "Narzo N55", "11 5G", "11x 5G", "Narzo 60x", "V50s", "Oppo A1", "F23", "K11x", "A58 4G", "A79", "A2"], "total_compativeis": 12}, {"modelo_principal": "Oppo Realme Narzo 30 Pro", "marca": "Realme", "modelos_compativeis": ["Realme 7", "Realme 7 5G", "Realme 7 Pro", "Redmi K30 Ultra"], "total_compativeis": 4}, {"modelo_principal": "Oppo Reno 9", "marca": "Oppo", "modelos_compativeis": ["Reno 9 Pro", "Reno 9 Pro Plus", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Reno 11", "Reno 11 Pro", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo Reno 9 Pro", "marca": "Oppo", "modelos_compativeis": ["Reno 9", "Reno 9 Pro Plus", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Reno 11", "Reno 11 Pro", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo Reno 9 Pro Plus", "marca": "Oppo", "modelos_compativeis": ["Reno 9", "Reno 9 Pro", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Reno 11", "Reno 11 Pro", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo Reno 10", "marca": "Oppo", "modelos_compativeis": ["Reno 10 Pro", "Reno 10 Pro Plus", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 11", "Reno 11 Pro", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo Reno 10 Pro", "marca": "Oppo", "modelos_compativeis": ["Reno 10", "Reno 10 Pro Plus", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 11", "Reno 11 Pro", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo Reno 10 Pro Plus", "marca": "Oppo", "modelos_compativeis": ["Reno 10", "Reno 10 Pro", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 11", "Reno 11 Pro", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo Reno 11", "marca": "Oppo", "modelos_compativeis": ["Reno 11 Pro", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Oppo Reno 11 Pro", "marca": "Oppo", "modelos_compativeis": ["Reno 11", "Reno 9", "Reno 9 Pro", "Reno 9 Pro Plus", "Reno 10", "Reno 10 Pro", "Reno 10 Pro Plus", "Oppo A1 Pro", "Oppo A2 Pro", "Realme 11 Pro Plus"], "total_compativeis": 10}, {"modelo_principal": "Infinix GT 10 Pro", "marca": "Infinix", "modelos_compativeis": ["Note 13 4G", "Note 13 5G", "Poco X5 Pro"], "total_compativeis": 3}, {"modelo_principal": "Infinix Hot 10i", "marca": "Infinix", "modelos_compativeis": ["Infinix Hot 8", "Samsung A12", "A13", "A23"], "total_compativeis": 4}, {"modelo_principal": "Infinix Hot 11S", "marca": "Infinix", "modelos_compativeis": ["Hot 20S", "Hot 30", "Hot 40", "Hot 40 Pro", "Note 30", "Redmi 12"], "total_compativeis": 6}, {"modelo_principal": "Infinix Hot 12i", "marca": "Infinix", "modelos_compativeis": ["Hot 12 Pro", "Smart 7", "A02", "A03", "A12"], "total_compativeis": 5}, {"modelo_principal": "Infinix Hot 20S", "marca": "Infinix", "modelos_compativeis": ["Hot 11S", "Hot 30", "Hot 40", "Hot 40 Pro", "Note 30", "Redmi 12"], "total_compativeis": 6}, {"modelo_principal": "Infinix Hot 20 5G", "marca": "Infinix", "modelos_compativeis": ["A13", "A23"], "total_compativeis": 2}, {"modelo_principal": "Infinix Hot 30", "marca": "Infinix", "modelos_compativeis": ["Hot 11S", "Hot 20S", "Hot 40", "Hot 40 Pro", "Note 30", "Redmi 12"], "total_compativeis": 6}, {"modelo_principal": "Infinix Hot 30i", "marca": "Infinix", "modelos_compativeis": ["Hot 12 Pro", "A04"], "total_compativeis": 2}, {"modelo_principal": "Infinix Hot 40i", "marca": "Infinix", "modelos_compativeis": ["Moto G24", "G24 Power", "G04", "G04s", "E14"], "total_compativeis": 5}, {"modelo_principal": "Infinix Hot 40 Pro", "marca": "Infinix", "modelos_compativeis": ["Hot 40", "Hot 50 4G", "Infinix Note 40X 5G", "Infinix Note 30", "Infinix Note 30 5G", "Redmi 13", "Redmi 13 5G", "Redmi 12", "Redmi 12 5G", "Redmi Note 13R", "Redmi Note 12R", "Poco M6 Pro 5G", "Poco M6 Plus"], "total_compativeis": 13}, {"modelo_principal": "Infinix Hot 50i", "marca": "Infinix", "modelos_compativeis": ["Infinix Hot 50", "Poco X3", "Redmi Note 9S"], "total_compativeis": 3}, {"modelo_principal": "Infinix Note 12 Pro", "marca": "Infinix", "modelos_compativeis": ["Note 12 Pro 5G", "Infinix Note 12 G96", "Note 12 5G", "Note 12I 2022", "Note 30I", "Zero 20", "Note 12 2023", "Note 11", "Samsung A70"], "total_compativeis": 9}, {"modelo_principal": "Infinix Note 30", "marca": "Infinix", "modelos_compativeis": ["Hot 11S", "Hot 20S", "Hot 30", "Hot 40", "Hot 40 Pro", "Redmi 12"], "total_compativeis": 6}, {"modelo_principal": "Infinix Smart 6", "marca": "Infinix", "modelos_compativeis": ["Smart 5"], "total_compativeis": 1}, {"modelo_principal": "Infinix Smart 7", "marca": "Infinix", "modelos_compativeis": ["Hot 12i", "Hot 12 Pro", "Hot 30i", "A02", "A03", "A12"], "total_compativeis": 6}, {"modelo_principal": "Infinix Smart 8", "marca": "Infinix", "modelos_compativeis": ["Smart 8 Pro", "Smart 8 Plus", "Infinix Hot 40I", "G34", "G24", "G 2024", "G04s", "G04", "E14"], "total_compativeis": 9}, {"modelo_principal": "Infinix Smart 8 Pro", "marca": "Infinix", "modelos_compativeis": ["Smart 8", "Smart 8 Plus", "G34", "Redmi Note 13 4G"], "total_compativeis": 4}, {"modelo_principal": "Infinix Zero 5G", "marca": "Infinix", "modelos_compativeis": ["Note 30", "Note 30 5G", "Hot 40 Pro", "Redmi 13x", "13 5G", "12 4G", "12 5G", "Note 12R", "13 4G", "Note 13R", "Poco M6 4G", "M6 Pro 5G"], "total_compativeis": 12}];
    const PIXEL_FREE_MODELS = new Set(["Samsung A03", "Samsung A04", "Samsung A12", "Samsung A13 5G", "Samsung A15 4G", "Samsung A15 5G", "Redmi 13C", "Poco C65", "Poco X6", "Redmi Note 10 4G"]);
    let pixelSelectedBrand = '';

    const GRUPO_CATALOGOS_URL = "https://chat.whatsapp.com/FROgxjKeafKAtGrSJpykXv?mode=gi_t";
    const GRUPO_DOCUMENTOS_URL = "https://chat.whatsapp.com/FyDDMFtZ4hmCCh5HZodLo7?mode=gi_t";
    const FREE_LOJISTAS_GROUP_URL = "https://chat.whatsapp.com/GIYXcb0FahUEuTOS8jltKP?mode=gi_t";

    const catalogLessons = [
      {
        title:'Como Editar Seu Catálogo no Canva Passo a Passo',
        desc:'Aprenda a editar seu catálogo no Canva de forma simples.',
        youtube:'https://youtu.be/i492Km8pQEc',
        embed:'https://www.youtube.com/embed/i492Km8pQEc'
      },
      {
        title:'Como Configurar Botões de WhatsApp no Seu Catálogo',
        desc:'Configure os botões de WhatsApp para receber clientes direto no atendimento.',
        youtube:'https://youtu.be/-Aqh5iwJD9E',
        embed:'https://www.youtube.com/embed/-Aqh5iwJD9E'
      },
      {
        title:'Como Publicar e Compartilhar Seu Catálogo com Clientes',
        desc:'Veja como publicar e enviar seu catálogo para seus clientes.',
        youtube:'https://youtu.be/KDaomRYx978',
        embed:'https://www.youtube.com/embed/KDaomRYx978'
      }
    ];

    const products = {
      areaPremium: {
        id:'areaPremium',
        title:'Área Premium',
        category:'premium',
        icon:'ti-star',
        desc:'Checklist, Script de Vendas, Biblioteca de Ads e Palavras-Chave.',
        checkoutUrl:'#'
      },
      iphone: {
        id:'iphone',
        productIcon:'data:image/webp;base64,UklGRvIBAABXRUJQVlA4IOYBAADQDQCdASpkAGQAPmEwlEckIyIhJ9v4AIAMCWkAFcS9mf9ArwN8GUEXAWwKY//1fKV8+f833BP1m30D9gBs0Q2xPqa+RXelIuYilTK2Fphu+pJA9FAdP+n6mgyPjQ70EvgVawvLDowQ4sGQ/HbwN8CTEAOTD4UjwAD+/FzQPULzP/wQOa/+eH/sGzl5+1elm/v71RY5fEGG+yvmtSTeyis0uEh282fjjfqGHsa9bqSsKxUrj+urJNzW4QXn1a/9/umv9tuWiuL/gk0Y9udSt9lbtlft/6GtGdfvlRv/n2Y8qOL+U11bMm21GT8WuDz/DMDs8f4MFnHL7EHUsgZ8QNv/W6IBdnCgylNeDn+X/KmmPJ/8n4Tba+VVSWWbiNaZrkdL4peX1LDV/DCeoiuL6y3gGsSAa7uAe+y3hFtsUcR8QWkgJoAcs6vzzp//jW6bY1zyTr+N8+fH599KbBa1OroDOkvrtJuPsH/pbJqUydVKznsmlBkyUR91kbyJ3XACIFWgfR1L5y9Z3oYlKoCZZf0XMgNQ++2HzzOZsqeIAOOAqHTdylFh4oZfh4r9MM4DOBER7hr5ZByNjnHFEHLZo4Ti1tckZTXz9C76UxbIvPybSmCaDzMLlisjyPoRHV0h2VLFUIAAAAA=',
        title:'Catálogo iPhone',
        category:'catalogos',
        brandSymbol:'',
        icon:'ti-brand-apple',
        desc:'Catálogo pronto para divulgar e vender iPhones.',
        previewUrl:'https://decolesolucoes.my.canva.site/catalogoiphone',
        canvaUrl:'https://canva.link/4f61h8i9pzacfek',
        checkoutUrl:'https://pay.cakto.com.br/3dgcgd9_466546',
        lessons:catalogLessons,
        groupType:'catalogos'
      },
      apple: {
        id:'apple',
        productIcon:'data:image/webp;base64,UklGRvIBAABXRUJQVlA4IOYBAADQDQCdASpkAGQAPmEwlEckIyIhJ9v4AIAMCWkAFcS9mf9ArwN8GUEXAWwKY//1fKV8+f833BP1m30D9gBs0Q2xPqa+RXelIuYilTK2Fphu+pJA9FAdP+n6mgyPjQ70EvgVawvLDowQ4sGQ/HbwN8CTEAOTD4UjwAD+/FzQPULzP/wQOa/+eH/sGzl5+1elm/v71RY5fEGG+yvmtSTeyis0uEh282fjjfqGHsa9bqSsKxUrj+urJNzW4QXn1a/9/umv9tuWiuL/gk0Y9udSt9lbtlft/6GtGdfvlRv/n2Y8qOL+U11bMm21GT8WuDz/DMDs8f4MFnHL7EHUsgZ8QNv/W6IBdnCgylNeDn+X/KmmPJ/8n4Tba+VVSWWbiNaZrkdL4peX1LDV/DCeoiuL6y3gGsSAa7uAe+y3hFtsUcR8QWkgJoAcs6vzzp//jW6bY1zyTr+N8+fH599KbBa1OroDOkvrtJuPsH/pbJqUydVKznsmlBkyUR91kbyJ3XACIFWgfR1L5y9Z3oYlKoCZZf0XMgNQ++2HzzOZsqeIAOOAqHTdylFh4oZfh4r9MM4DOBER7hr5ZByNjnHFEHLZo4Ti1tckZTXz9C76UxbIvPybSmCaDzMLlisjyPoRHV0h2VLFUIAAAAA=',
        title:'Catálogo Apple',
        category:'catalogos',
        brandSymbol:'',
        icon:'ti-brand-apple',
        desc:'Catálogo para iPad, Apple Watch, MacBook e acessórios.',
        previewUrl:'https://decolesolucoes.my.canva.site/catalogoapple',
        canvaUrl:'https://canva.link/4mdi3usxohzvcng',
        checkoutUrl:'https://pay.cakto.com.br/388aq4g_466549',
        lessons:catalogLessons,
        groupType:'catalogos'
      },
      xiaomi: {
        id:'xiaomi',
        productIcon:'data:image/webp;base64,UklGRpACAABXRUJQVlA4IIQCAADQEwCdASpkAGQAPmEulEckIqIhJJJKeIAMCULwAEvCDv+A/EDXtOkfkB+x3TAb8d7OELM31r/sPPt/SfYB9qvuAfo7+gHWv8xP8A/l36ye1P1AH9V/t3Wc/yX1GvKh9lv93fSIC8DHSqqK+MzHWPzyGq06Jq4ayTtm5QLc5KTVkvcAQK/duFhIR9XvWyvwOHdPiWM22oQqw8YttOGybjhhaqI5QXGEgAD+yL7Vx/BH1vFELjURMVT/jyAAGXQrJld9+uDaSR8OPMFcT/YzuC+3fw+2HHNrvsilFbnf+YlI8QNm6mpoim9PnqJHlGOp0PlxuYAYCEFnROczTAAfFV/APkHFznWMP3e3Qi8ne91XGNSEoabUy//l/GRaqDBcM18vl0ORl//sGjAQyt/yRD8ahByPdvFDj46K8NPspgyxrKT+3wi2M4XVOBguI6Ap2py+WC67p6d4I5uEWZnnC+AQkaGkaIJH18VoBS/V8Ez9zKnYLVq30FZS+IjlpsDP/45Cb970Y+sG8FpCMJpF6aay+YWPgzl3368nwdxclZeZxvoE7TpAYI6A4gIDV3VosHu/BqpExOcfh+r18qLOWS5ymu9U9OKzg3R9IAJBwLN90YZU5wiLW1LhNr971wmmQaofryf6WnCuuTrCjZvETDBu8O/h+OSXPfIADFx4qvrHy/hlRf6VDISsQ6pS4OXKjjXNou2tnoCIOJSJvy0oR1nTMxq8KR5Dk/Fz2tuSXypfxLscVWhvfJkKXTAyvuDFKpBY/WtlPnIoj3uSga0MP+FpjP/Giek547gs00vykhBP0PpdDiQX1CZxYDALBX2Lj1vzICfZRaNWVgyYSMKTciAAAAAAAA==',
        title:'Catálogo Xiaomi',
        category:'catalogos',
        brandSymbol:'mi',
        brandClass:'xiaomi-logo',
        icon:'ti-device-mobile',
        desc:'Catálogo completo para Redmi, Mi e Poco.',
        previewUrl:'https://decolesolucoes.my.canva.site/catalogoxiaomi',
        canvaUrl:'https://canva.link/a680ptv67sau3nc',
        checkoutUrl:'https://pay.cakto.com.br/388aq4g_466549',
        lessons:catalogLessons,
        groupType:'catalogos'
      },
      realme: {
        id:'realme',
        productIcon:'data:image/webp;base64,UklGRm4DAABXRUJQVlA4IGIDAACwFQCdASpkAGQAPmEulEckIqIhJfOaaIAMCWIA1BIWfsH4zbQ51r8iufB5nj9offyH27fRL0AeIr5gH6Ae7PzAfaB7vfSAf0T/R+lH7MXoO+WT+0Hwr/uD+wHtAarzPhsBl2gwUy/yaL8gwo/lNp6PHsVBi+9m7ivBS7mpqabP8R4SSaOQyJ2Jx5pMswgNR00UQ4DS7gYsQjKmLmrK8KOl/GuIn1mw1KwQnojCGTrzWw+e1N8oAAD+9c+2An4M78Gd/BnCVu9Yg7A6gXH9vYcAsdKu22o6Ho1R9beIX+flJ/KXZz12PuP7fME/cL4GOpYDP8FKOQHH7R0O/Ar+7t6CihYLhItq49BDICyz8jEDp8jS9jOa94lL/SdNNwEyfEQvu7hccICnMBWmg2FJ9Z2Hja7Vt0+4qDP5g40LoWLTEvDcjwEHtIH51EwbPYJJgyJ+ldVjxikat4aw206VaWK93LHd51eKZItM9Rjm7jugU9djHpl/3m7/LxE7Bon67/Gv33yCv9FDInxTLCoRuqHZN7dfbnu3ipX/IDPu0OLGJrcHTiUVaAiP5D/dAfU74JhBz8Cxtx1jHsAmfjT+IbvNEBIx829ft+yD22qC6zX/byxm2gGF9dNbp94Uws3znaqJocy3UtqaBZrdKao7QYrrv4Tdddx7352qRnUbzjofYRmmAu5fN7ge5dwwAW+KO2dIcVbebfniv/2XemYQfNSdJt8qsqNDCjyY5OpvC/53S/WD2oQf/05CaF0AqVML1+kcig13kZOY/klnFBR/01I3ovVxoi53uuQp0qMpU/aL3UxP3f/xOF7j8/oGoEyvZ8aj4AjU4PT1WHVFcIJHTuJcxvZp6WG2cQb7eS5foONfC9pS1imFLv4fB1XTqnLhDvw7LKRCYJ4Pd3EJMf4nVkQU5e1WAhe1Lmdmbxk3a+LQo6iR+rg4dKL4qjStSiDyzriLJelu8/OykTRQnkl5dbqhubDhoNO80f612GCd6We3bqPnftm0anyM+KmazYrm//PF8eu95hmWT2yb+hE7CI5m7FyzjfmwFQF+bdnxwaqA2ttVKIx1IEOK9JH3m4d69q9GhVyWnzcIRaAXS2zcdk9eu5HWPxffTTvCeGOSIW5g6LReJP3PcWxs7btN+QA84HcAAA==',
        title:'Catálogo Realme',
        category:'catalogos',
        brandSymbol:'R',
        brandClass:'realme-logo',
        icon:'ti-device-mobile',
        desc:'Catálogo completo para modelos Realme.',
        previewUrl:'https://decolesolucoes.my.canva.site/catalogorealme',
        canvaUrl:'https://canva.link/6b1thxnwvzwsk17',
        checkoutUrl:'https://pay.cakto.com.br/388aq4g_466549',
        lessons:catalogLessons,
        groupType:'catalogos'
      },
      completo: {
        id:'completo',
        productIcon:'data:image/webp;base64,UklGRvIBAABXRUJQVlA4IOYBAADQDQCdASpkAGQAPmEwlEckIyIhJ9v4AIAMCWkAFcS9mf9ArwN8GUEXAWwKY//1fKV8+f833BP1m30D9gBs0Q2xPqa+RXelIuYilTK2Fphu+pJA9FAdP+n6mgyPjQ70EvgVawvLDowQ4sGQ/HbwN8CTEAOTD4UjwAD+/FzQPULzP/wQOa/+eH/sGzl5+1elm/v71RY5fEGG+yvmtSTeyis0uEh282fjjfqGHsa9bqSsKxUrj+urJNzW4QXn1a/9/umv9tuWiuL/gk0Y9udSt9lbtlft/6GtGdfvlRv/n2Y8qOL+U11bMm21GT8WuDz/DMDs8f4MFnHL7EHUsgZ8QNv/W6IBdnCgylNeDn+X/KmmPJ/8n4Tba+VVSWWbiNaZrkdL4peX1LDV/DCeoiuL6y3gGsSAa7uAe+y3hFtsUcR8QWkgJoAcs6vzzp//jW6bY1zyTr+N8+fH599KbBa1OroDOkvrtJuPsH/pbJqUydVKznsmlBkyUR91kbyJ3XACIFWgfR1L5y9Z3oYlKoCZZf0XMgNQ++2HzzOZsqeIAOOAqHTdylFh4oZfh4r9MM4DOBER7hr5ZByNjnHFEHLZo4Ti1tckZTXz9C76UxbIvPybSmCaDzMLlisjyPoRHV0h2VLFUIAAAAA=',
        title:'Catálogo Completo',
        category:'catalogos',
        brandSymbol:'',
        icon:'ti-crown',
        desc:'Todos os catálogos reunidos em um único acesso.',
        previewUrl:'https://decolesolucoes.my.canva.site/catalogoiphone',
        canvaUrl:'https://canva.link/4f61h8i9pzacfek',
        checkoutUrl:'https://pay.cakto.com.br/388aq4g_466549',
        lessons:catalogLessons,
        groupType:'catalogos'
      },
      termoGarantia: {
        id:'termoGarantia',
        productIcon:'data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAABwFACdASpkAGQAPmEsk0YkIqGhLRWY0IAMCUAanv/WM/bfHl2YA3/3j1EcaB7n/MB+yHrMaZ96AHlw+zfgID6dWURjqspwUWTCraFoE1Ynzx1Ekf/M/qg61wmNAvvIdB9cR69O6a1TybDQX357N3n5TN4AkPs0yAOPD9tbb7mFNijm1Muw9WmLCRiIuYyNL+NgpynktSNaU5XlluxO1iOO69ZXS31IZenPTnkgAP74mVv/7sn/+8Z//3Gf4if/7F5y9ftYVTHUHLQOax1PcmfwAH7UR+bQqbxsXLJRvovwRfV/ManEvlcPgd9giqMIXaAKGFznwLGayIzf1wU8a9Uokn7txaWRi1f5T/Mo+L2oprHjDniYKE0h9TZBzqPBrkvYwn8eMEyN1VB2+GcAipDa45UTAgr5wEt/OkxRrt2mUdn7obW173OXa6XDn8j0CZhoyph3CVOcSYoJh3gOZC2NXwI2Qp8RvsSot20q95/Vtself+iN1m6cfyIP8D/rIyFh3g3j344ZRuQ+DNYI0JjG7OEOIiBXsqqfu7q0FcAeiDy7U3myrmABvoKXs34K05Gq3UuJ/Kgu6EtaiNhlDfxJmAVlmf/1lLFF41CzIm5KCrMyHXm+6m/gk3MVGQTo9mz//f/Jm6SqAG+K9j8f8GPeq9sEXjWsqVqUMR8/lGH6dOcPMYDTPC0jwGoCjQ02Bb+B4OK/wy9Ij46BLjgHHK6yiz3xHTbxYjF0m8JJ9kdtcdTc+maReRrMch/GF+WonC4sUZxLCzs/GwGyOEBx8OMEDvWUV32ZG0rDGgeQ/9ngzdB3iJF6OILmLPZVmCIrMCF4K7T8worre13neVZaIzwdiwr5ImMwyRob1U1EuqkT6dxse/Yg5c9+bLnu28BtQqRlJHHAchQU/x6n7k7QFTcFmGu6z2jOZDaHM5czyecwSSdl78AsZGYz1c/whH4MZH5CKzEx1/kIrJZu4nVHk1KYUu/zUAPrvlf9HkLjCiUfo813t1kX4F7wq5+a/Tovu4dN3dnA1y/2dIliEm4mroHvxYzajC5AP+aHgLd8G+swDItauiMeY6mhrFKboZCPo5x/pZshLwDwiN7v7QwJDYhlgCzBB/k5BwAAAAAA',
        title:'Contrato de Garantia',
        category:'lojaiPhone',
        icon:'ti-shield-check',
        desc:'Documento editável para vender iPhones com mais segurança.',
        previewDescription:'Modelo de garantia para apresentar ao cliente de forma clara e profissional.',
        previewUrl:'https://canva.link/vr004ry60pgxf6j',
        canvaUrl:'https://canva.link/9au925t9rh3lb7i',
        checkoutUrl:'https://pay.cakto.com.br/37hx97u_466558',
        lessons:[]
      },
      videosIphone: {
        id:'videosIphone',
        productIcon:'data:image/webp;base64,UklGRkoDAABXRUJQVlA4ID4DAAAQFACdASpkAGQAPmEsk0YkIqGhLHUZWIAMCWIAlQNPKNju4OCoITupx31Wbf3zPeeL6JvQA6RT0APLh9k/9xvSqT1MsDSazPvJK+SWNF/N558oh2QpnorkstA07i4jMqJ8UQ57yH4j7byYjQmyGYy4XT+UPFABP61WGFcTlMP+VzQ8gxFso2Qjg2x1VYsoyko0M6DAR2g3jsOnqONkGKdp8B24xg2lXjKAAP79NmhPeYszpOWcMs25P/inUgMICQ2iGVKL2SVNUlKEjoWcTdLi/fzVEeCiHj5/M99RaCpkm4cbfgMgrvRv7L2xsjSDT83tyrl7jfYA4+YBVq/PMFPXXookHf40bEJAG7f433BiO8ibawk7dFZJ/36YWwgTwV9Cqo7IG+DT3Yjdwn97Ey65F1o5BdNt4ijb0fxQfPNMCZs9OsYfGNWASfkspXR5mZCn0hMeFUga3+4Gscc/4WJ6JkMkXtvA45UTo8WxY+0NIAYD8/wQbKFWSeRCTFmxoVLC7VlyZedtPLApgnwuRDzhQrRCyRpaAAS96/sWxjebz/O2iZgEt7Kp8yOhrXW4y/0atvk9kWf/KhMf9jBehvYvXChRvYWXsbe1yTn8RK8m0zSW6AEdf6yDH0Nzrarq3DjsYzLa5rObVnxulMBihJJthd0z43UfYJC1NFMS8ukroX8TfW4E+BhCCDrmNIPvT8eCc3mfismky1bFJY5Wj6Q0v5LyvKRdJ/Cj+PtRpDXcxUJd3geAG946OX6PEZXqidSWqoyXEOJSiu3h11KeAXniY81ALixVcM60FreOSdJvATE2m15nkB/JfGI7pu/LqTY88/wXvXQ1fJDSkjHyrB68Gu284tXBhGKwRy8OJJ3gAdk4Ur/ZCxmIwLYHpUknMwJCYgQx4GnAjKFOm7iDfaD4IeocdLD6L1Gd/nf/SlZf3oO/BKxwEB8j2yRt3uAbM12xPkgpyr6WC0qjJdoIdvb9zy8OiICcX+4uGKKkNLdMNC/fVQAktDOneUdNTubqvXkO+oNg6cdCzjbkIkgt7TrqJU4YKkHBZFEfTPF4hCZodsunvO5K18jITQIIElwIeZ4UDU4Qw5JfpPIQAAAAAA==',
        title:'Pack de Vídeos Virais para iPhone',
        category:'lojaiPhone',
        icon:'ti-brand-tiktok',
        desc:'Vídeos prontos para atrair clientes.',
        previewDescription:'Vídeos virais para vender mais nas redes sociais sobre iPhones, Xiaomi e celulares. Inclui mais de 100 vídeos.',
        previewUrl:'https://drive.google.com/drive/folders/1wvcwChAleU2fl_xy7Uxn6uGTCMwJTp97?usp=sharing',
        downloadUrl:'https://drive.google.com/drive/folders/1wvcwChAleU2fl_xy7Uxn6uGTCMwJTp97?usp=sharing',
        checkoutUrl:'https://pay.cakto.com.br/36pwf3r_466556',
        lessons:[]
      },
      artesIphone: {
        id:'artesIphone',
        productIcon:'data:image/webp;base64,UklGRpwEAABXRUJQVlA4IJAEAACwGQCdASpkAGQAPmEulEckIqIhI/K6+IAMCWIA1E4NPd/w3mi2j/FcJAdqw36vfE26g/iq/tv2Pv9F6gH9V/yXWM/sB7AH65emN+43wd/t76VVIDx8f8rwtysWDGkpmfeST6e9gT9Zt9NKocHJRGMNnotIEvDf/zD/hzZqGaGQ1yP0qQjZB5nNhMi5n65NYUywmWeQ8I/RnDfATQ2HSQ0FERuvqCBnHqt93AkG7OlR//rlJ8XT3Fp1N00X5i/GiHvj6vGCqrthwI3SFN9XQoOEZQDsW8wAAP75BGf/N8/uj+HdEjykbPYEbUuMSNMCJTOe7O6ycqhqiso82ADL9uSYSkSQgPkl008ij8XzxXBfd1jrTpY+7xXqbKV/3i0bdrL6fvbJDUdrcued7hnQZ1r2FE+mbHh+xJUCeAg3eTxO/+9DCcuTATrRsQl7jnltXpy2Tjahn+69MHECfBGRL2xMFbC0uz3iQAIbDyGwn6oW1ydEEiYEc2oPP+v8yqtcZUUa6rqIr//1bBosMEjvA/6MG4h10FE5Qd1/WcaeYJcYO2XGd8YN5VD7qZMpiKbzsg9y4zhslbORCb0THJ0zTP9u4apQ0qvw1Z9z4SUs/IWsrypiOELJKfb/T7H7vaFuGYj5FYM/fnEJxwcxFPkFkR9gLvTU+UOJW4in2zs+aqX/YrE8p8hyrPIpTJOYWiIPFKUB5mDtm4o/cvCjrHf7PB1BW5CaKJ5JwhK4m4mR3ITQxv0gdhx7/J24XVIc/z/mM+a1eIdI1q9lXYUgUljDUBBO1GOtcyUgf0GpvX9ugoK8AL6dGbD1WZn45TP6AqKcS0d2OuNpF3gAXNljEarVQkfMzvhvArPAXD86eBIrbmpzVCxM3vem/n6ktkyxq9PA79fnv2aiK9YQkE1D9w2Knz9IQ7GiZC/2zGIp7eGtUbeLy0CzmFRH7Y1Zgy5f4o3lKIJXwa15Z51xmk2X+Rn79YvTvtIXdw7cinyYjcBkiUDlbnjI89JazGBD1YYbvsPp3fuYZK3jKHy3yB+r9/LJcXgrFKr4YW2z6S5CJWUqRQkJNRUwrEB/4YWXJagXbKSRv0oJvE6zT7b8070GdbOTQB90VYtUMasL2blv6OC7IT6JCYAPMBDvFaGqSsqrZgYKyX6PRtW8Tzch0XomrHHfA/e+90n0hJcvR9Hzcs1BPns5f4/jbpQ/F5zzW2W+ghfkdMK5/7UnweULcfUmM7lS3Z6Gs0IjRpCux3Y0n9+fYZND2xoS+1CggHdFGiO/oqK38qxcDFV8MM5nssXzUXhQnyYMJFqeHbwNdbP8YlEoLSaqAkHf796k8V0l7nHLhPWceT89eXKzIc5y/+X+4jGYk/rwKrQoG4GvkQZdYXRRWDfIe/H7QOcMXpO7rCI9GqcaRq+kRMH3g3TVvW6QhJCdQ2Gj9Hgo7qB4qSrpaMo8UtRqgfyjGmHQLbWkz52+F6qjetDk+OKVdvPVtN3p53dsvL+4Iy/+wJCi+V0nBzv5cj0L1qipDwcg3TWhp+r7cIy52xgKHkRnnflfhjjZAJQAAAAA',
        title:'Pack de Artes Canva',
        category:'lojaiPhone',
        icon:'ti-brush',
        desc:'Artes editáveis para vender iPhones.',
        previewDescription:'Artes editáveis no Canva para divulgar iPhones e movimentar suas redes sociais.',
        previewLinks:['https://www.canva.com/design/DAG6NKocm5A/FHQgGwf2SdFtxfh3oYI-5g/view?mode=preview','https://www.canva.com/design/DAG6NLGWVHM/mIfkqOXKirCvuu5HyvFacA/view?mode=preview','https://www.canva.com/design/DAG6NEYC6jA/N7A2oWrKWYiEhXgFhDy7uA/view?mode=preview','https://www.canva.com/design/DAG6NBuNPGE/AL-Zh1vu9Ag-YhRAQ3Tpgg/view?mode=preview','https://www.canva.com/design/DAG6NFvMoCo/Z9Sr_k91kSbveuN8axJuRw/view?mode=preview'],
        canvaLinks:['https://www.canva.com/design/DAG6NKocm5A/FHQgGwf2SdFtxfh3oYI-5g/view?mode=preview','https://www.canva.com/design/DAG6NLGWVHM/mIfkqOXKirCvuu5HyvFacA/view?mode=preview','https://www.canva.com/design/DAG6NEYC6jA/N7A2oWrKWYiEhXgFhDy7uA/view?mode=preview','https://www.canva.com/design/DAG6NBuNPGE/AL-Zh1vu9Ag-YhRAQ3Tpgg/view?mode=preview','https://www.canva.com/design/DAG6NFvMoCo/Z9Sr_k91kSbveuN8axJuRw/view?mode=preview'],
        checkoutUrl:'https://pay.cakto.com.br/ofq9oum_466554',
        lessons:[]
      },
      documentos: {
        id:'documentos',
        groupType:'documentos',
        productIcon:'data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAABwFACdASpkAGQAPmEsk0YkIqGhLRWY0IAMCUAanv/WM/bfHl2YA3/3j1EcaB7n/MB+yHrMaZ96AHlw+zfgID6dWURjqspwUWTCraFoE1Ynzx1Ekf/M/qg61wmNAvvIdB9cR69O6a1TybDQX357N3n5TN4AkPs0yAOPD9tbb7mFNijm1Muw9WmLCRiIuYyNL+NgpynktSNaU5XlluxO1iOO69ZXS31IZenPTnkgAP74mVv/7sn/+8Z//3Gf4if/7F5y9ftYVTHUHLQOax1PcmfwAH7UR+bQqbxsXLJRvovwRfV/ManEvlcPgd9giqMIXaAKGFznwLGayIzf1wU8a9Uokn7txaWRi1f5T/Mo+L2oprHjDniYKE0h9TZBzqPBrkvYwn8eMEyN1VB2+GcAipDa45UTAgr5wEt/OkxRrt2mUdn7obW173OXa6XDn8j0CZhoyph3CVOcSYoJh3gOZC2NXwI2Qp8RvsSot20q95/Vtself+iN1m6cfyIP8D/rIyFh3g3j344ZRuQ+DNYI0JjG7OEOIiBXsqqfu7q0FcAeiDy7U3myrmABvoKXs34K05Gq3UuJ/Kgu6EtaiNhlDfxJmAVlmf/1lLFF41CzIm5KCrMyHXm+6m/gk3MVGQTo9mz//f/Jm6SqAG+K9j8f8GPeq9sEXjWsqVqUMR8/lGH6dOcPMYDTPC0jwGoCjQ02Bb+B4OK/wy9Ij46BLjgHHK6yiz3xHTbxYjF0m8JJ9kdtcdTc+maReRrMch/GF+WonC4sUZxLCzs/GwGyOEBx8OMEDvWUV32ZG0rDGgeQ/9ngzdB3iJF6OILmLPZVmCIrMCF4K7T8worre13neVZaIzwdiwr5ImMwyRob1U1EuqkT6dxse/Yg5c9+bLnu28BtQqRlJHHAchQU/x6n7k7QFTcFmGu6z2jOZDaHM5czyecwSSdl78AsZGYz1c/whH4MZH5CKzEx1/kIrJZu4nVHk1KYUu/zUAPrvlf9HkLjCiUfo813t1kX4F7wq5+a/Tovu4dN3dnA1y/2dIliEm4mroHvxYzajC5AP+aHgLd8G+swDItauiMeY6mhrFKboZCPo5x/pZshLwDwiN7v7QwJDYhlgCzBB/k5BwAAAAAA',
        title:'Pack Documentos Assistência',
        category:'assistencia',
        icon:'ti-files',
        desc:'Documentos editáveis no Canva para sua assistência técnica.',
        previewDescription:'Pack com documentos prontos para editar e usar na assistência técnica.',
        previewUrl:'https://canva.link/myi26sxb1arffjj',
        canvaUrl:'https://canva.link/2dq4lfnls7cmkd4',
        checkoutUrl:'https://pay.cakto.com.br/7hnxsot_466448',
        lessons:[]
      },
      ordemServico: {
        id:'ordemServico',
        groupType:'documentos',
        productIcon:'data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAABwFACdASpkAGQAPmEsk0YkIqGhLRWY0IAMCUAanv/WM/bfHl2YA3/3j1EcaB7n/MB+yHrMaZ96AHlw+zfgID6dWURjqspwUWTCraFoE1Ynzx1Ekf/M/qg61wmNAvvIdB9cR69O6a1TybDQX357N3n5TN4AkPs0yAOPD9tbb7mFNijm1Muw9WmLCRiIuYyNL+NgpynktSNaU5XlluxO1iOO69ZXS31IZenPTnkgAP74mVv/7sn/+8Z//3Gf4if/7F5y9ftYVTHUHLQOax1PcmfwAH7UR+bQqbxsXLJRvovwRfV/ManEvlcPgd9giqMIXaAKGFznwLGayIzf1wU8a9Uokn7txaWRi1f5T/Mo+L2oprHjDniYKE0h9TZBzqPBrkvYwn8eMEyN1VB2+GcAipDa45UTAgr5wEt/OkxRrt2mUdn7obW173OXa6XDn8j0CZhoyph3CVOcSYoJh3gOZC2NXwI2Qp8RvsSot20q95/Vtself+iN1m6cfyIP8D/rIyFh3g3j344ZRuQ+DNYI0JjG7OEOIiBXsqqfu7q0FcAeiDy7U3myrmABvoKXs34K05Gq3UuJ/Kgu6EtaiNhlDfxJmAVlmf/1lLFF41CzIm5KCrMyHXm+6m/gk3MVGQTo9mz//f/Jm6SqAG+K9j8f8GPeq9sEXjWsqVqUMR8/lGH6dOcPMYDTPC0jwGoCjQ02Bb+B4OK/wy9Ij46BLjgHHK6yiz3xHTbxYjF0m8JJ9kdtcdTc+maReRrMch/GF+WonC4sUZxLCzs/GwGyOEBx8OMEDvWUV32ZG0rDGgeQ/9ngzdB3iJF6OILmLPZVmCIrMCF4K7T8worre13neVZaIzwdiwr5ImMwyRob1U1EuqkT6dxse/Yg5c9+bLnu28BtQqRlJHHAchQU/x6n7k7QFTcFmGu6z2jOZDaHM5czyecwSSdl78AsZGYz1c/whH4MZH5CKzEx1/kIrJZu4nVHk1KYUu/zUAPrvlf9HkLjCiUfo813t1kX4F7wq5+a/Tovu4dN3dnA1y/2dIliEm4mroHvxYzajC5AP+aHgLd8G+swDItauiMeY6mhrFKboZCPo5x/pZshLwDwiN7v7QwJDYhlgCzBB/k5BwAAAAAA',
        icon:'ti-file-text',
        title:'Ordem de Serviço',
        desc:'Modelo editável de ordem de serviço com checklist.',
        isFree:true,
        highlight:true,
        previewUrl:'https://canva.link/ycs3se3cw8tu6tw',
        canvaUrl:'https://canva.link/ntunsdngvqadppx',
        checkoutUrl:'https://canva.link/ycs3se3cw8tu6tw'
      },

      videosAssistencia: {
        id:'videosAssistencia',
        productIcon:'data:image/webp;base64,UklGRkoDAABXRUJQVlA4ID4DAAAQFACdASpkAGQAPmEsk0YkIqGhLHUZWIAMCWIAlQNPKNju4OCoITupx31Wbf3zPeeL6JvQA6RT0APLh9k/9xvSqT1MsDSazPvJK+SWNF/N558oh2QpnorkstA07i4jMqJ8UQ57yH4j7byYjQmyGYy4XT+UPFABP61WGFcTlMP+VzQ8gxFso2Qjg2x1VYsoyko0M6DAR2g3jsOnqONkGKdp8B24xg2lXjKAAP79NmhPeYszpOWcMs25P/inUgMICQ2iGVKL2SVNUlKEjoWcTdLi/fzVEeCiHj5/M99RaCpkm4cbfgMgrvRv7L2xsjSDT83tyrl7jfYA4+YBVq/PMFPXXookHf40bEJAG7f433BiO8ibawk7dFZJ/36YWwgTwV9Cqo7IG+DT3Yjdwn97Ey65F1o5BdNt4ijb0fxQfPNMCZs9OsYfGNWASfkspXR5mZCn0hMeFUga3+4Gscc/4WJ6JkMkXtvA45UTo8WxY+0NIAYD8/wQbKFWSeRCTFmxoVLC7VlyZedtPLApgnwuRDzhQrRCyRpaAAS96/sWxjebz/O2iZgEt7Kp8yOhrXW4y/0atvk9kWf/KhMf9jBehvYvXChRvYWXsbe1yTn8RK8m0zSW6AEdf6yDH0Nzrarq3DjsYzLa5rObVnxulMBihJJthd0z43UfYJC1NFMS8ukroX8TfW4E+BhCCDrmNIPvT8eCc3mfismky1bFJY5Wj6Q0v5LyvKRdJ/Cj+PtRpDXcxUJd3geAG946OX6PEZXqidSWqoyXEOJSiu3h11KeAXniY81ALixVcM60FreOSdJvATE2m15nkB/JfGI7pu/LqTY88/wXvXQ1fJDSkjHyrB68Gu284tXBhGKwRy8OJJ3gAdk4Ur/ZCxmIwLYHpUknMwJCYgQx4GnAjKFOm7iDfaD4IeocdLD6L1Gd/nf/SlZf3oO/BKxwEB8j2yRt3uAbM12xPkgpyr6WC0qjJdoIdvb9zy8OiICcX+4uGKKkNLdMNC/fVQAktDOneUdNTubqvXkO+oNg6cdCzjbkIkgt7TrqJU4YKkHBZFEfTPF4hCZodsunvO5K18jITQIIElwIeZ4UDU4Qw5JfpPIQAAAAAA==',
        title:'Pack Reels Assistência',
        category:'assistencia',
        icon:'ti-tools',
        desc:'Vídeos prontos para divulgar sua assistência técnica.',
        previewDescription:'Vídeos prontos para divulgar reparos e assistência técnica nas redes sociais.',
        previewUrl:'https://drive.google.com/drive/folders/1l2I66mRwsLhNVxGWvp5xhkEERpnYQoQ7?usp=sharing',
        downloadUrl:'https://drive.google.com/drive/folders/1l2I66mRwsLhNVxGWvp5xhkEERpnYQoQ7?usp=sharing',
        checkoutUrl:'https://pay.cakto.com.br/33vqdye_466429',
        lessons:[]
      },
      artesAssistencia: {
        id:'artesAssistencia',
        productIcon:'data:image/webp;base64,UklGRpwEAABXRUJQVlA4IJAEAACwGQCdASpkAGQAPmEulEckIqIhI/K6+IAMCWIA1E4NPd/w3mi2j/FcJAdqw36vfE26g/iq/tv2Pv9F6gH9V/yXWM/sB7AH65emN+43wd/t76VVIDx8f8rwtysWDGkpmfeST6e9gT9Zt9NKocHJRGMNnotIEvDf/zD/hzZqGaGQ1yP0qQjZB5nNhMi5n65NYUywmWeQ8I/RnDfATQ2HSQ0FERuvqCBnHqt93AkG7OlR//rlJ8XT3Fp1N00X5i/GiHvj6vGCqrthwI3SFN9XQoOEZQDsW8wAAP75BGf/N8/uj+HdEjykbPYEbUuMSNMCJTOe7O6ycqhqiso82ADL9uSYSkSQgPkl008ij8XzxXBfd1jrTpY+7xXqbKV/3i0bdrL6fvbJDUdrcued7hnQZ1r2FE+mbHh+xJUCeAg3eTxO/+9DCcuTATrRsQl7jnltXpy2Tjahn+69MHECfBGRL2xMFbC0uz3iQAIbDyGwn6oW1ydEEiYEc2oPP+v8yqtcZUUa6rqIr//1bBosMEjvA/6MG4h10FE5Qd1/WcaeYJcYO2XGd8YN5VD7qZMpiKbzsg9y4zhslbORCb0THJ0zTP9u4apQ0qvw1Z9z4SUs/IWsrypiOELJKfb/T7H7vaFuGYj5FYM/fnEJxwcxFPkFkR9gLvTU+UOJW4in2zs+aqX/YrE8p8hyrPIpTJOYWiIPFKUB5mDtm4o/cvCjrHf7PB1BW5CaKJ5JwhK4m4mR3ITQxv0gdhx7/J24XVIc/z/mM+a1eIdI1q9lXYUgUljDUBBO1GOtcyUgf0GpvX9ugoK8AL6dGbD1WZn45TP6AqKcS0d2OuNpF3gAXNljEarVQkfMzvhvArPAXD86eBIrbmpzVCxM3vem/n6ktkyxq9PA79fnv2aiK9YQkE1D9w2Knz9IQ7GiZC/2zGIp7eGtUbeLy0CzmFRH7Y1Zgy5f4o3lKIJXwa15Z51xmk2X+Rn79YvTvtIXdw7cinyYjcBkiUDlbnjI89JazGBD1YYbvsPp3fuYZK3jKHy3yB+r9/LJcXgrFKr4YW2z6S5CJWUqRQkJNRUwrEB/4YWXJagXbKSRv0oJvE6zT7b8070GdbOTQB90VYtUMasL2blv6OC7IT6JCYAPMBDvFaGqSsqrZgYKyX6PRtW8Tzch0XomrHHfA/e+90n0hJcvR9Hzcs1BPns5f4/jbpQ/F5zzW2W+ghfkdMK5/7UnweULcfUmM7lS3Z6Gs0IjRpCux3Y0n9+fYZND2xoS+1CggHdFGiO/oqK38qxcDFV8MM5nssXzUXhQnyYMJFqeHbwNdbP8YlEoLSaqAkHf796k8V0l7nHLhPWceT89eXKzIc5y/+X+4jGYk/rwKrQoG4GvkQZdYXRRWDfIe/H7QOcMXpO7rCI9GqcaRq+kRMH3g3TVvW6QhJCdQ2Gj9Hgo7qB4qSrpaMo8UtRqgfyjGmHQLbWkz52+F6qjetDk+OKVdvPVtN3p53dsvL+4Iy/+wJCi+V0nBzv5cj0L1qipDwcg3TWhp+r7cIy52xgKHkRnnflfhjjZAJQAAAAA',
        title:'Pack Artes Canva Assistência',
        category:'assistencia',
        icon:'ti-brush',
        desc:'Artes editáveis no Canva para divulgar sua assistência técnica.',
        previewDescription:'Artes editáveis no Canva para divulgar sua assistência técnica.',
        previewLinks:['https://www.canva.com/design/DAGshDtGqS8/-xXzE6T1PjDsZs8VlSfOhQ/view?mode=preview','https://www.canva.com/design/DAGshKaBaTM/dEz9SzPZZMBInQrv2hEseg/view?mode=preview'],
        canvaLinks:['https://www.canva.com/design/DAGshDtGqS8/-xXzE6T1PjDsZs8VlSfOhQ/view?mode=preview','https://www.canva.com/design/DAGshKaBaTM/dEz9SzPZZMBInQrv2hEseg/view?mode=preview'],
        checkoutUrl:'https://pay.cakto.com.br/djoincj_466428',
        lessons:[]
      },
      precificacao: {
        id:'precificacao',
        previewUrl:'https://drive.google.com/drive/folders/1Hg6tWOo42HVitHD8wwTcTJnDTXrVjGIz?usp=drive_link',
        downloadUrl:'https://drive.google.com/drive/folders/1Hg6tWOo42HVitHD8wwTcTJnDTXrVjGIz?usp=drive_link',
        productIcon:'data:image/webp;base64,UklGRlADAABXRUJQVlA4IEQDAAAQFACdASpkAGQAPmEsk0YkIqGhLRZo0IAMCUAan5c5hi7g5NgPUbywHqX8xXnKaal6AH6zem37OXlYuGS6jflaYNp4f0TUn5KE09v2mNktlP/6M5OEwtYo+RQSeRIlfzQALrrz8J1FzFU+bHhbJrkN9zbZAcn/d5qbCB7wC2l9OxJtkCTvkLG8AGRZ8bYCLCl8i1K/dfywF5oVODp7AHqJEPc6mlxrDscAAP7w+ivikhjX/+jD/87/533iAeM7qqtln5Ob6Qe5IVI3Z3fkowyGBzU5Avt/MMlM0jOH0YxB9wkeY2i02P4R2n8U39gjHKmalFvJhKPBUbILkD2rJNwmD/nya/Uo6l9tC98WsAM1tGySMFJtzrtdVYbC3FDOwegGs+o+T9VawnNNwy/pbdzb1oMGQaKt2uJjneT3ZBGLrqHOVWC2CYLQLae/AQtWrzDqpf1Opg/+aU/+JEqaY3IDLL50fvJAJHfj8w1LfU8zfX3oOcooZdj+XZ6gnQ74csqkyJxKXY9V6KHXbm15xM58+wvXr5ikJGurkN/5bs9E6lWVDvH94cteQOzcXEgH9gMb9/BdCpKaX7iyg3H6YofM81KV3vdYTWweUpNj8qSF51v+nTyrrt/9vT9rWM4rbxc6cfXLZCCuDIXGpGK8b99yF58W1tu/LA8jdf3hLputUv+ZYEXxX2YCfrQoT+Rz9RZe2s4EQGw4sHCrOFdJO77CPSm83ph+IDzVxG/SK+rn8piI1pyP/1hDdz2Y93cexcZp1WmPCYqkjvFOlH3s/MajI1/ml7DERT3Y79qlxSraXIB5Kbds80zLAA2WyUfk8L6753pPceHQ8SI9h8cZ8PwJ2H4UYr8/z/zUKXUyCLCexwHwlvOCohIfWW+wRjdVHZeiLWOZXu1F1enS9SfE0VJQKQfN+W7ptgWGG+WJaOrZvhwBw8qE19Yr9LBVhfYK/+rdXpneNgpgYm5t79oL2yfW2IJM8ZE7XbLc7HXCZrWj+rD2TeQTSsqZ5pbxRra3UvQnFr9pd4k7a0C7tVQQijDSNt/sA3jyjaAaGPqtaLbdmiHEYlqVxMNFN906xvlgVxC2tQ9YItGCAex0rd5FIAAAAAAAAA==',
        title:'Tabela de Precificação',
        category:'bonus',
        icon:'ti-calculator',
        desc:'Planilha de apoio para calcular preço de venda, custo e margem de lucro.',
        previewDescription:'Tabela de precificação para organizar custos e definir preços de venda.',
        downloadLabel:'Acessar',
        lessons:[]
      },
      tabelaTroca: {
        id:'tabelaTroca',
        productIcon:'data:image/webp;base64,UklGRlADAABXRUJQVlA4IEQDAAAQFACdASpkAGQAPmEsk0YkIqGhLRZo0IAMCUAan5c5hi7g5NgPUbywHqX8xXnKaal6AH6zem37OXlYuGS6jflaYNp4f0TUn5KE09v2mNktlP/6M5OEwtYo+RQSeRIlfzQALrrz8J1FzFU+bHhbJrkN9zbZAcn/d5qbCB7wC2l9OxJtkCTvkLG8AGRZ8bYCLCl8i1K/dfywF5oVODp7AHqJEPc6mlxrDscAAP7w+ivikhjX/+jD/87/533iAeM7qqtln5Ob6Qe5IVI3Z3fkowyGBzU5Avt/MMlM0jOH0YxB9wkeY2i02P4R2n8U39gjHKmalFvJhKPBUbILkD2rJNwmD/nya/Uo6l9tC98WsAM1tGySMFJtzrtdVYbC3FDOwegGs+o+T9VawnNNwy/pbdzb1oMGQaKt2uJjneT3ZBGLrqHOVWC2CYLQLae/AQtWrzDqpf1Opg/+aU/+JEqaY3IDLL50fvJAJHfj8w1LfU8zfX3oOcooZdj+XZ6gnQ74csqkyJxKXY9V6KHXbm15xM58+wvXr5ikJGurkN/5bs9E6lWVDvH94cteQOzcXEgH9gMb9/BdCpKaX7iyg3H6YofM81KV3vdYTWweUpNj8qSF51v+nTyrrt/9vT9rWM4rbxc6cfXLZCCuDIXGpGK8b99yF58W1tu/LA8jdf3hLputUv+ZYEXxX2YCfrQoT+Rz9RZe2s4EQGw4sHCrOFdJO77CPSm83ph+IDzVxG/SK+rn8piI1pyP/1hDdz2Y93cexcZp1WmPCYqkjvFOlH3s/MajI1/ml7DERT3Y79qlxSraXIB5Kbds80zLAA2WyUfk8L6753pPceHQ8SI9h8cZ8PwJ2H4UYr8/z/zUKXUyCLCexwHwlvOCohIfWW+wRjdVHZeiLWOZXu1F1enS9SfE0VJQKQfN+W7ptgWGG+WJaOrZvhwBw8qE19Yr9LBVhfYK/+rdXpneNgpgYm5t79oL2yfW2IJM8ZE7XbLc7HXCZrWj+rD2TeQTSsqZ5pbxRra3UvQnFr9pd4k7a0C7tVQQijDSNt/sA3jyjaAaGPqtaLbdmiHEYlqVxMNFN906xvlgVxC2tQ9YItGCAex0rd5FIAAAAAAAAA==',
        previewUrl:'tabela-trocas.html',
        title:'Tabela de Troca de iPhone',
        category:'bonus',
        icon:'ti-calculator',
        desc:'Calcule rapidamente quanto pagar no aparelho usado e a diferença que o cliente precisa completar.',
        previewDescription:'Calculadora de troca para negociação de iPhones.',
        downloadLabel:'Visualizar',
        lessons:[]
      },
      peliculas3d: {
        id:'peliculas3d',
        previewUrl:'tabela-peliculas-3d.html',
        checkoutUrl:'https://pay.cakto.com.br/faiw8vb_923965',
        productIcon:'data:image/webp;base64,UklGRlADAABXRUJQVlA4IEQDAAAQFACdASpkAGQAPmEsk0YkIqGhLRZo0IAMCUAan5c5hi7g5NgPUbywHqX8xXnKaal6AH6zem37OXlYuGS6jflaYNp4f0TUn5KE09v2mNktlP/6M5OEwtYo+RQSeRIlfzQALrrz8J1FzFU+bHhbJrkN9zbZAcn/d5qbCB7wC2l9OxJtkCTvkLG8AGRZ8bYCLCl8i1K/dfywF5oVODp7AHqJEPc6mlxrDscAAP7w+ivikhjX/+jD/87/533iAeM7qqtln5Ob6Qe5IVI3Z3fkowyGBzU5Avt/MMlM0jOH0YxB9wkeY2i02P4R2n8U39gjHKmalFvJhKPBUbILkD2rJNwmD/nya/Uo6l9tC98WsAM1tGySMFJtzrtdVYbC3FDOwegGs+o+T9VawnNNwy/pbdzb1oMGQaKt2uJjneT3ZBGLrqHOVWC2CYLQLae/AQtWrzDqpf1Opg/+aU/+JEqaY3IDLL50fvJAJHfj8w1LfU8zfX3oOcooZdj+XZ6gnQ74csqkyJxKXY9V6KHXbm15xM58+wvXr5ikJGurkN/5bs9E6lWVDvH94cteQOzcXEgH9gMb9/BdCpKaX7iyg3H6YofM81KV3vdYTWweUpNj8qSF51v+nTyrrt/9vT9rWM4rbxc6cfXLZCCuDIXGpGK8b99yF58W1tu/LA8jdf3hLputUv+ZYEXxX2YCfrQoT+Rz9RZe2s4EQGw4sHCrOFdJO77CPSm83ph+IDzVxG/SK+rn8piI1pyP/1hDdz2Y93cexcZp1WmPCYqkjvFOlH3s/MajI1/ml7DERT3Y79qlxSraXIB5Kbds80zLAA2WyUfk8L6753pPceHQ8SI9h8cZ8PwJ2H4UYr8/z/zUKXUyCLCexwHwlvOCohIfWW+wRjdVHZeiLWOZXu1F1enS9SfE0VJQKQfN+W7ptgWGG+WJaOrZvhwBw8qE19Yr9LBVhfYK/+rdXpneNgpgYm5t79oL2yfW2IJM8ZE7XbLc7HXCZrWj+rD2TeQTSsqZ5pbxRra3UvQnFr9pd4k7a0C7tVQQijDSNt/sA3jyjaAaGPqtaLbdmiHEYlqVxMNFN906xvlgVxC2tQ9YItGCAex0rd5FIAAAAAAAAA==',
        title:'Tabela Películas 3D',
        category:'bonus',
        icon:'ti-table',
        desc:'Consulte a compatibilidade completa das películas 3D por modelo de aparelho.',
        previewDescription:'Tabela de compatibilidade de películas 3D por aparelho.',
        downloadLabel:'Acessar',
        lessons:[]
      },
      fornecedores: {
        id:'fornecedores',
        previewUrl:'https://drive.google.com/drive/folders/1Hg6tWOo42HVitHD8wwTcTJnDTXrVjGIz?usp=sharing',
        productIcon:'data:image/webp;base64,UklGRlADAABXRUJQVlA4IEQDAAAQFACdASpkAGQAPmEsk0YkIqGhLRZo0IAMCUAan5c5hi7g5NgPUbywHqX8xXnKaal6AH6zem37OXlYuGS6jflaYNp4f0TUn5KE09v2mNktlP/6M5OEwtYo+RQSeRIlfzQALrrz8J1FzFU+bHhbJrkN9zbZAcn/d5qbCB7wC2l9OxJtkCTvkLG8AGRZ8bYCLCl8i1K/dfywF5oVODp7AHqJEPc6mlxrDscAAP7w+ivikhjX/+jD/87/533iAeM7qqtln5Ob6Qe5IVI3Z3fkowyGBzU5Avt/MMlM0jOH0YxB9wkeY2i02P4R2n8U39gjHKmalFvJhKPBUbILkD2rJNwmD/nya/Uo6l9tC98WsAM1tGySMFJtzrtdVYbC3FDOwegGs+o+T9VawnNNwy/pbdzb1oMGQaKt2uJjneT3ZBGLrqHOVWC2CYLQLae/AQtWrzDqpf1Opg/+aU/+JEqaY3IDLL50fvJAJHfj8w1LfU8zfX3oOcooZdj+XZ6gnQ74csqkyJxKXY9V6KHXbm15xM58+wvXr5ikJGurkN/5bs9E6lWVDvH94cteQOzcXEgH9gMb9/BdCpKaX7iyg3H6YofM81KV3vdYTWweUpNj8qSF51v+nTyrrt/9vT9rWM4rbxc6cfXLZCCuDIXGpGK8b99yF58W1tu/LA8jdf3hLputUv+ZYEXxX2YCfrQoT+Rz9RZe2s4EQGw4sHCrOFdJO77CPSm83ph+IDzVxG/SK+rn8piI1pyP/1hDdz2Y93cexcZp1WmPCYqkjvFOlH3s/MajI1/ml7DERT3Y79qlxSraXIB5Kbds80zLAA2WyUfk8L6753pPceHQ8SI9h8cZ8PwJ2H4UYr8/z/zUKXUyCLCexwHwlvOCohIfWW+wRjdVHZeiLWOZXu1F1enS9SfE0VJQKQfN+W7ptgWGG+WJaOrZvhwBw8qE19Yr9LBVhfYK/+rdXpneNgpgYm5t79oL2yfW2IJM8ZE7XbLc7HXCZrWj+rD2TeQTSsqZ5pbxRra3UvQnFr9pd4k7a0C7tVQQijDSNt/sA3jyjaAaGPqtaLbdmiHEYlqVxMNFN906xvlgVxC2tQ9YItGCAex0rd5FIAAAAAAAAA==',
        title:'Lista de Fornecedores',
        category:'bonus',
        icon:'ti-building-store',
        desc:'Contatos para comparar preços e comprar melhor.',
        previewDescription:'Lista para organizar fornecedores e comparar compras.',
        downloadUrl:'https://drive.google.com/drive/folders/1Hg6tWOo42HVitHD8wwTcTJnDTXrVjGIz?usp=sharing',
        downloadLabel:'Baixar',
        lessons:[]
      }
    };

    const LEGACY_PLAN_ACCESS = {
      1: ['iphone','fornecedores','precificacao','peliculas3d'],
      2: ['completo','iphone','apple','xiaomi','realme','fornecedores','precificacao','peliculas3d']
    };

    let unlocked = [];
    let currentUser = null;
    let selectedUnlockProduct = null;

    const FREE_TRIAL_POPUP_INITIAL_DELAY = 5 * 60 * 1000; // 5 minutos após o cadastro
    const FREE_TRIAL_POPUP_REPEAT_INTERVAL = 60 * 60 * 1000; // reaparece a cada 1 hora
    const FREE_TRIAL_WHATSAPP_URL =
      'https://wa.me/5511949185861?text=' +
      encodeURIComponent('Estou no teste gratuito e quero desbloquear, pode me ajudar');

    let freeTrialPopupTimer = null;

    function getFreeTrialCadastroKey(){
      return currentUser?.id ? `freeTrialCadastroAt:${currentUser.id}` : '';
    }

    function getFreeTrialPopupLastShownKey(){
      return currentUser?.id ? `freeTrialPopupLastShown:${currentUser.id}` : '';
    }

    function rememberCadastroTimeIfNeeded(){
      const key = getFreeTrialCadastroKey();
      if(!key) return;
      if(!localStorage.getItem(key)){
        localStorage.setItem(key, new Date().toISOString());
      }
    }

    function getUserCreatedAtTime(){
      const fallbackCadastroAt = getFreeTrialCadastroKey()
        ? localStorage.getItem(getFreeTrialCadastroKey())
        : '';

      const createdAt =
        currentUser?.created_at ||
        currentUser?.createdAt ||
        currentUser?.user_metadata?.created_at ||
        fallbackCadastroAt;

      const createdTime = createdAt ? new Date(createdAt).getTime() : Date.now();
      return Number.isFinite(createdTime) ? createdTime : Date.now();
    }

    function getFreeTrialPopupLastShownTime(){
      const key = getFreeTrialPopupLastShownKey();
      if(!key) return 0;
      const value = Number(localStorage.getItem(key) || 0);
      return Number.isFinite(value) ? value : 0;
    }

    function isFreeTrialWithoutPin(){
      if(!currentUser?.id) return false;

      // Regra principal: se já existe qualquer PIN/acesso liberado, o popup nunca aparece.
      if(Array.isArray(unlocked) && unlocked.length > 0) return false;

      return true;
    }

    function shouldScheduleFreeTrialPopup(){
      return false;
    }

    function cancelFreeTrialPopup(){
      clearTimeout(freeTrialPopupTimer);
      freeTrialPopupTimer = null;
    }

    function scheduleFreeTrialPopup(){
      cancelFreeTrialPopup();

      if(!shouldScheduleFreeTrialPopup()) return;

      const createdTime = getUserCreatedAtTime();
      const lastShownTime = getFreeTrialPopupLastShownTime();
      const targetTime = lastShownTime > 0
        ? lastShownTime + FREE_TRIAL_POPUP_REPEAT_INTERVAL
        : createdTime + FREE_TRIAL_POPUP_INITIAL_DELAY;

      const remainingTime = Math.max(targetTime - Date.now(), 0);

      freeTrialPopupTimer = setTimeout(() => {
        openFreeTrialPopup();
      }, remainingTime);
    }

    function openFreeTrialPopup(){
      if(!shouldScheduleFreeTrialPopup()) return;

      const storageKey = getFreeTrialPopupLastShownKey();
      if(storageKey) localStorage.setItem(storageKey, String(Date.now()));

      setModal(
        'ti-brand-whatsapp',
        'Desbloqueie todos os recursos',
        `
          <div class="free-trial-popup"><span class="free-trial-badge">TESTE GRATUITO</span><p>
              Você está no teste gratuito. Para liberar todos os recursos, fale comigo no WhatsApp e veja a condição especial.
            </p><div class="free-trial-list"><span>Atendimento pelo WhatsApp</span><span>Condição especial para novos lojistas</span></div><button class="btn free-trial-whatsapp-btn" onclick="openExternal('${FREE_TRIAL_WHATSAPP_URL}', 'WhatsApp teste gratuito')"><i class="ti ti-brand-whatsapp"></i>
              Falar no WhatsApp</button></div>
        `,
        false
      );

      document.getElementById('modal')?.classList.add('free-trial-modal');
    }

    function validateEmail(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
    function displayName(){ return currentUser?.user_metadata?.name || currentUser?.email?.split('@')[0] || 'Lojista'; }
    function initials(){ return displayName().trim().split(/\s+/).slice(0,2).map(p=>p[0]).join('').toUpperCase() || 'L'; }
    function hasAccess(id){ return unlocked.includes(id); }
    function isFreeProduct(productId){ return !!products?.[productId]?.isFree; }
    function canOpenProduct(productId){ return isFreeProduct(productId) || hasAccess(productId); }

    const LOCAL_ACCESS_KEY = 'centralLocalProductAccess_v1';
    const PREMIUM_PRODUCT_ID = 'areaPremium';
    const PREMIUM_PIN_LENGTH = 4;

    function sanitizePinInput(input){
      if(!input) return '';
      const clean = String(input.value || '').replace(/\D/g, '').slice(0, PREMIUM_PIN_LENGTH);
      if(input.value !== clean) input.value = clean;
      return clean;
    }

    function setupPinInputs(){
      ['quickCodeInput','modalCodeInput'].forEach(id => {
        const input = document.getElementById(id);
        if(!input || input.dataset.pinReady === '1') return;
        input.dataset.pinReady = '1';
        input.setAttribute('maxlength', String(PREMIUM_PIN_LENGTH));
        input.setAttribute('minlength', String(PREMIUM_PIN_LENGTH));
        input.setAttribute('pattern', '[0-9]{4}');
        input.setAttribute('inputmode', 'numeric');
        input.setAttribute('placeholder', 'PIN de 4 dígitos');
        input.addEventListener('input', () => sanitizePinInput(input));
        input.addEventListener('paste', () => setTimeout(() => sanitizePinInput(input), 0));
      });
    }


    function getLocalAccessIds(){
      try{
        const saved = JSON.parse(localStorage.getItem(LOCAL_ACCESS_KEY) || '[]');
        return Array.isArray(saved) ? saved.filter(Boolean) : [];
      }catch(_){
        return [];
      }
    }

    function saveLocalAccessIds(ids){
      const merged = Array.from(new Set([...(getLocalAccessIds() || []), ...(ids || [])].filter(Boolean)));
      localStorage.setItem(LOCAL_ACCESS_KEY, JSON.stringify(merged));
      merged.forEach(productId => { if(productId && !unlocked.includes(productId)) unlocked.push(productId); });
      return merged;
    }

    function showToast(message){
      const t = document.getElementById('toast');
      document.getElementById('toastText').textContent = message;
      t.classList.add('show');
      setTimeout(()=>t.classList.remove('show'),2400);
    }

    async function consultarAcessosAtuais(options = {}){
      if(!currentUser?.id){ unlocked = []; return; }

      const acessos = new Set();

      const { data: productAccess, error: accessError } = await sb
        .from('user_product_access')
        .select('product_id')
        .eq('user_id', currentUser.id);

      if(accessError && accessError.code !== '42P01'){
        console.warn('Erro user_product_access:', accessError);
      }

      (productAccess || []).forEach(row => row?.product_id && acessos.add(row.product_id));

      if(!options.skipLegacy){
        const { data: legacyPlan, error: legacyError } = await sb
          .from('user_plans')
          .select('plano')
          .eq('id', currentUser.id)
          .maybeSingle();

        if(legacyError && legacyError.code !== 'PGRST116'){
          console.warn('Erro user_plans:', legacyError);
        }

        const plano = legacyPlan && Number(legacyPlan.plano);
        if(Number.isFinite(plano)){
          Object.keys(LEGACY_PLAN_ACCESS).forEach(level => {
            if(plano >= Number(level)){
              LEGACY_PLAN_ACCESS[level].forEach(productId => acessos.add(productId));
            }
          });
        }
      }

      getLocalAccessIds().forEach(productId => acessos.add(productId));
      unlocked = Array.from(acessos);
    }

    async function createAccount(){
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value;
      const error = document.getElementById('signupError');
      error.classList.remove('show'); error.textContent = '';

      if(!name){ error.textContent='Informe seu nome para criar o login.'; error.classList.add('show'); return; }
      if(!validateEmail(email)){ error.textContent='Informe um e-mail válido.'; error.classList.add('show'); return; }
      if(password.length < 6){ error.textContent='Crie uma senha com pelo menos 6 caracteres.'; error.classList.add('show'); return; }

      try{
        const { error: signUpError } = await sb.auth.signUp({ email, password, options:{ data:{ name } } });
        if(signUpError) throw signUpError;

        const { data: loginData, error: loginError } = await sb.auth.signInWithPassword({ email, password });
        if(loginError) throw loginError;

        currentUser = loginData.user;
        rememberCadastroTimeIfNeeded();
        unlocked = [];
        await consultarAcessosAtuais({ skipLegacy:true });
        showApp();
      }catch(err){
        console.error(err);
        error.textContent = traduzirErroAuth(err);
        error.classList.add('show');
      }
    }

    async function loginAccount(){
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const error = document.getElementById('loginError');
      error.classList.remove('show'); error.textContent = '';

      if(!validateEmail(email)){ error.textContent='Informe um e-mail válido.'; error.classList.add('show'); return; }
      if(password.length < 6){ error.textContent='Informe sua senha.'; error.classList.add('show'); return; }

      try{
        const { data, error: loginError } = await sb.auth.signInWithPassword({ email, password });
        if(loginError) throw loginError;
        currentUser = data.user;
        await consultarAcessosAtuais();
        showApp();
      }catch(err){
        console.error(err);
        error.textContent = traduzirErroAuth(err);
        error.classList.add('show');
      }
    }

    function traduzirErroAuth(err){
      const msg = (err?.message || '').toLowerCase();
      if(msg.includes('invalid login credentials')) return 'E-mail ou senha inválidos.';
      if(msg.includes('already registered')) return 'Esse e-mail já possui cadastro. Faça login.';
      if(msg.includes('password')) return 'Verifique a senha informada.';
      if(msg.includes('email')) return 'Verifique o e-mail informado.';
      return 'Não foi possível continuar agora. Tente novamente.';
    }

    function openSignupForm(){
      const signup = document.getElementById('signupForm');
      const login = document.getElementById('loginForm');
      signup.style.display = 'block';
      login.style.display = 'none';
      const first = document.getElementById('signupName');
      if(first) first.focus();
    }

    function openLoginForm(){
      const signup = document.getElementById('signupForm');
      const login = document.getElementById('loginForm');
      signup.style.display = 'none';
      login.style.display = 'block';
      const first = document.getElementById('loginEmail');
      if(first) first.focus();
    }

    function toggleLogin(){
      const signup = document.getElementById('signupForm');
      const login = document.getElementById('loginForm');
      const showingSignup = signup.style.display !== 'none';
      signup.style.display = showingSignup ? 'none' : 'block';
      login.style.display = showingSignup ? 'block' : 'none';
    }

    document.getElementById("googleLoginBtn").addEventListener("click", async () => {
      const btn = document.getElementById("googleLoginBtn");
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="google-mark">G</span> Abrindo Google...';

      const { error } = await sb.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin
        }
      });

      if(error){
        console.error(error);
        btn.disabled = false;
        btn.innerHTML = originalText;
        const loginError = document.getElementById('loginError');
        if(loginError){
          loginError.textContent = 'Não foi possível abrir o login com Google. Verifique a configuração no Supabase.';
          loginError.classList.add('show');
        }
      }
    });

    function openPasswordPopup(){
      const modal = document.getElementById('passwordModal');
      const resetEmail = document.getElementById('passwordResetEmail');
      const loginEmail = document.getElementById('loginEmail');
      const error = document.getElementById('passwordResetError');

      if(error){
        error.classList.remove('show');
        error.textContent = '';
      }

      if(resetEmail && loginEmail && loginEmail.value){
        resetEmail.value = loginEmail.value.trim();
      }

      closeAllPopups('passwordModal');
      if(modal){
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
      }

      setTimeout(() => resetEmail && resetEmail.focus(), 80);
    }

    function closePasswordPopup(){
      const modal = document.getElementById('passwordModal');
      const error = document.getElementById('passwordResetError');

      if(error){
        error.classList.remove('show');
        error.textContent = '';
      }

      if(modal){
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
      }
    }

    async function sendPasswordReset(){
      const emailInput = document.getElementById('passwordResetEmail');
      const error = document.getElementById('passwordResetError');
      const email = emailInput ? emailInput.value.trim() : '';

      if(error){
        error.classList.remove('show');
        error.textContent = '';
      }

      if(!validateEmail(email)){
        if(error){
          error.textContent = 'Informe um e-mail válido.';
          error.classList.add('show');
        }
        return;
      }

      try{
        const { error: resetError } = await sb.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin
        });

        if(resetError) throw resetError;

        if(error){
          error.textContent = 'Enviamos o link de recuperação para seu e-mail.';
          error.classList.add('show');
        }
      }catch(err){
        console.error(err);
        if(error){
          error.textContent = 'Não foi possível enviar o link. Verifique o e-mail e tente novamente.';
          error.classList.add('show');
        }
      }
    }

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closePasswordPopup();
    });

    async function logout(){
      await sb.auth.signOut();
      cancelFreeTrialPopup();
      currentUser = null;
      unlocked = [];
      showLogin();
    }

    function updateCustomerUI(){
      document.getElementById('sidebarName').textContent = displayName();
      document.getElementById('sidebarEmail').textContent = currentUser?.email || '—';
      document.getElementById('customerAvatar').textContent = initials();

      const welcome = document.getElementById('welcomeMessage');
      if(welcome){
        const first = displayName().trim().split(' ')[0] || 'Lojista';
        welcome.textContent = `Olá, ${first}. Bem-vindo à Central do Lojista.`;
      }
    }

    function showApp(){
      document.getElementById('loginPage').classList.remove('active');
      document.getElementById('appPage').classList.add('active');
      updateCustomerUI();
      render();
      updatePremiumNavState();
      maybeShowOnboarding();
    }

    function showLogin(){
      cancelFreeTrialPopup();
      document.getElementById('appPage').classList.remove('active');
      document.getElementById('loginPage').classList.add('active');
    }

    function getActiveSectionId(){
      const active = document.querySelector('.section.active');
      return active?.id || 'inicio';
    }

    function premiumIds(){ return ['checklist','scripts','bibliotecaAds','palavrasChave']; }

    function hasPremiumAccess(){
      return hasAccess(PREMIUM_PRODUCT_ID) || premiumIds().some(id => hasAccess(id));
    }

    function updatePremiumNavState(){
      const allowed = hasPremiumAccess();
      const premiumMenu = document.getElementById('premiumMenu');
      const premiumToggle = document.getElementById('premiumToggle');
      const lockMini = document.getElementById('premiumLockMini');
      const mobilePremium = document.querySelector('.premium-mobile-nav');
      if(premiumToggle){
        premiumToggle.classList.toggle('locked-premium', !allowed);
        premiumToggle.setAttribute('aria-label', allowed ? 'Abrir Área Premium' : 'Liberar Área Premium com PIN');
      }
      if(lockMini) lockMini.style.display = allowed ? 'none' : 'inline-flex';
      if(mobilePremium) mobilePremium.classList.toggle('unlocked', allowed);
      if(premiumMenu && !allowed) premiumMenu.classList.remove('open');
    }

    function openPremiumAccess(){
      selectedUnlockProduct = PREMIUM_PRODUCT_ID;
      setModal('ti-lock', 'Liberar Área Premium', 'Digite o PIN de 4 dígitos para liberar Checklist, Script de Vendas, Biblioteca de Ads e Palavras-Chave.<div class="premium-locked-note"><i class="ti ti-star"></i> A liberação fica salva na sua conta pelo Supabase.</div>', true, products.areaPremium?.checkoutUrl || '');
    }

    function goTo(sectionId){
      const premiumList = premiumIds();

      if(sectionId === 'areaPremium'){
        if(!hasPremiumAccess()){
          openPremiumAccess();
          updatePremiumNavState();
          return;
        }
        sectionId = 'checklist';
      }

      if(premiumList.includes(sectionId) && !hasPremiumAccess()){
        openPremiumAccess();
        updatePremiumNavState();
        return;
      }

      if(sectionId === 'fornecedores' && !hasSupplierListAccess()){
        sectionId = 'catalogos';
        setTimeout(() => openUnlock('iphone'), 80);
      }
      document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === sectionId));
      const titles = {inicio:'Início',catalogos:'Catálogos',lojaiPhone:'Lojas de iPhones',fornecedores:'Fornecedores',assistencia:'Assistência Técnica',checklist:'Checklist',scripts:'Script de Vendas',bibliotecaAds:'Biblioteca de Ads',palavrasChave:'Palavras-Chave',bonus:'Bônus',suporte:'Suporte'};
      document.getElementById('pageTitle').textContent = titles[sectionId] || 'Central do Lojista';
      document.querySelectorAll('[data-section]').forEach(b => {
        const isPremiumButton = b.dataset.section === 'areaPremium';
        const shouldActivate = isPremiumButton ? premiumList.includes(sectionId) : b.dataset.section === sectionId;
        b.classList.toggle('active', shouldActivate);
      });
      const premiumMenu = document.getElementById('premiumMenu');
      if(premiumMenu && premiumList.includes(sectionId)) premiumMenu.classList.add('open');
      updatePremiumNavState();
    }

    function togglePremiumMenu(){
      if(!hasPremiumAccess()){
        openPremiumAccess();
        updatePremiumNavState();
        return;
      }
      const premiumMenu = document.getElementById('premiumMenu');
      if(premiumMenu) premiumMenu.classList.toggle('open');
      updatePremiumNavState();
    }
    document.querySelectorAll('[data-section]').forEach(b => b.addEventListener('click', () => goTo(b.dataset.section)));
    setTimeout(updatePremiumNavState, 0);

    function isCatalogProduct(product){
      return ['iphone','apple','xiaomi','realme','completo'].includes(product.id);
    }

    function openExternal(url, label){
      if(!url || url === '#'){
        showToast(`${label || 'Link'} ainda não configurado.`);
        return;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    function shouldOpenPreviewPopup(product){
      return !!(product?.previewLinks && product.previewLinks.length > 1);
    }

    function openPreviewLink(product){
      let url = '#';

      if(product?.previewLinks?.length === 1) url = product.previewLinks[0];
      else if(product?.previewUrl) url = product.previewUrl;
      else if(product?.downloadUrl) url = product.downloadUrl;

      openExternal(url, product?.downloadUrl ? 'Download' : 'Prévia');
    }

    function openProductPreviewPopup(productId){
      const product = products[productId];
      if(!product) return;

      const previewButtons = [];
      if(product.previewLinks?.length){
        product.previewLinks.forEach((url, index) => {
          previewButtons.push(`<button class="btn ghost" onclick="openExternal('${url}','Prévia ${index+1}')"><i class="ti ti-eye"></i> Visualizar ${index+1}</button>`);
        });
      }

      setModal(
        product.icon || 'ti-eye',
        product.title,
        `${product.previewDescription || product.desc}<div class="modal-actions modal-product-actions">${previewButtons.join('')}</div>`,
        false
      );
    }

    function openCanvaLinksPopup(productId){
      const product = products[productId];
      if(!product) return;

      const links = product.canvaLinks?.length ? product.canvaLinks : (product.canvaUrl ? [product.canvaUrl] : []);
      if(!links.length){
        showToast('Link do Canva ainda não configurado.');
        return;
      }

      if(links.length === 1){
        openExternal(links[0], 'Canva');
        return;
      }

      const buttons = links.map((url, index) =>
        `<button class="btn green" onclick="openExternal('${url}','Canva ${index+1}')"><i class="ti ti-edit"></i> Abrir arquivo ${index+1}</button>`
      ).join('');

      setModal(
        product.icon || 'ti-edit',
        `Editar — ${product.title}`,
        `Escolha o arquivo que deseja abrir no Canva:<div class="modal-actions modal-product-actions">${buttons}</div>`,
        false
      );
    }

    function closeAllPopups(exceptId='') {
      ['modal','passwordModal','onboardingModal','pwaHelpModal'].forEach(id => {
        if(id === exceptId) return;
        const el = document.getElementById(id);
        if(el){
          el.classList.remove('show');
          el.setAttribute('aria-hidden','true');
        }
      });
    }

    function setModal(icon, title, text, showCode=false, checkoutUrl=''){
      closeAllPopups('modal');
      const baseModal = document.getElementById('modal');
      baseModal?.classList.remove('free-trial-modal','success-modal','video-modal');
      document.getElementById('modalIcon').className = `ti ${icon}`;
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalText').innerHTML = text;
      document.getElementById('modalCodeArea').classList.toggle('show', showCode);

      const checkoutArea = document.getElementById('checkoutArea');
      if(checkoutArea){
        checkoutArea.className = '';
      }
      if(showCode && checkoutUrl && checkoutUrl !== '#'){
        checkoutArea.style.display = 'block';
        checkoutArea.innerHTML = `<button class="btn buy-now" style="width:100%" onclick="openExternal('${checkoutUrl}','Liberar')">Liberar</button>`;
      } else {
        checkoutArea.style.display = 'none';
        checkoutArea.innerHTML = '';
      }

      const mainModal = document.getElementById('modal');
      mainModal.classList.add('show');
      mainModal.setAttribute('aria-hidden','false');

      if(showCode){
        setupPinInputs();
        const input = document.getElementById('modalCodeInput');
        input.value = '';
        setTimeout(()=>input.focus(),80);
      }
    }

    function closeModal(){
      const modal = document.getElementById('modal');
      const wasFreeTrialModal = modal.classList.contains('free-trial-modal');

      modal.classList.remove('show');
      modal.setAttribute('aria-hidden','true');
      modal.classList.remove('free-trial-modal');
      closeVideoModalState();
      closeSuccessModalState();
      document.getElementById('modalCodeArea').classList.remove('show');
      selectedUnlockProduct = null;

      if(wasFreeTrialModal){
        // Popup automático removido. O desbloqueio aparece somente por ação do usuário.
      }
    }

    const CATALOG_UPGRADE_PRICE = 'R$49,90';
    const CATALOG_UPGRADE_CHECKOUT_URL = 'https://pay.cakto.com.br/388aq4g_466549';
    const CATALOG_UPGRADE_WHATSAPP_URL = 'https://wa.me/5511949185861?text=' + encodeURIComponent('Olá, quero fazer o upgrade dos catálogos por R$49,90. Pode me ajudar?');

    function openCatalogUpgradePopup(productId){
      const product = products[productId] || products.completo;
      selectedUnlockProduct = productId;

      setModal(
        'ti-lock-open',
        'Liberar outros catálogos',
        `<div class="upgrade-modal-copy"><p>Para acessar <strong>${product.title}</strong>, faça o upgrade dos catálogos por <strong>${CATALOG_UPGRADE_PRICE}</strong> ou digite seu PIN de desbloqueio.</p><div class="upgrade-modal-price"><span>Upgrade</span><strong>${CATALOG_UPGRADE_PRICE}</strong><small>Apple, Xiaomi e Realme</small></div></div>`,
        true,
        ''
      );

      const checkoutArea = document.getElementById('checkoutArea');
      if(checkoutArea){
        checkoutArea.style.display = 'grid';
        checkoutArea.className = 'upgrade-modal-actions';
        checkoutArea.innerHTML = `
          <button class="btn buy-now" onclick="openExternal('${CATALOG_UPGRADE_CHECKOUT_URL}','Comprar upgrade')">Comprar por ${CATALOG_UPGRADE_PRICE}</button>
          <button class="btn whatsapp-btn" onclick="openExternal('${CATALOG_UPGRADE_WHATSAPP_URL}','Comprar pelo WhatsApp')"><i class="ti ti-brand-whatsapp"></i> Comprar pelo WhatsApp</button>
        `;
      }
    }

    function openUnlock(productId){
      const product = products[productId];
      if(!product) return;

      if(productId === PREMIUM_PRODUCT_ID){
        openPremiumAccess();
        return;
      }

      if(['apple','xiaomi','realme','completo'].includes(productId)){
        openCatalogUpgradePopup(productId);
        return;
      }

      selectedUnlockProduct = productId;
      setModal('ti-lock', `Liberar ${product.title}`, 'Digite o PIN recebido para liberar este produto.', true, product.checkoutUrl || '');
    }

    function groupButton(product){
      if(product.groupType === 'catalogos'){
        return `<br><br><button class="btn gold" style="width:100%" onclick="openExternal(GRUPO_CATALOGOS_URL,'Grupo Catálogos')">Entrar no Grupo VIP</button>`;
      }

      if(product.groupType === 'documentos'){
        return `<br><br><button class="btn gold" style="width:100%" onclick="openExternal(GRUPO_DOCUMENTOS_URL,'Grupo Documentos')">Entrar no Grupo de Documentos</button>`;
      }

      return '';
    }

    function openAccess(productId){
      const product = products[productId];

      let description = 'Seu produto está liberado. Use o botão de acesso no card para abrir o material.';
      if(product.groupType === 'catalogos'){
        description = 'Seu catálogo está liberado. Você pode editar no Canva e acessar o grupo VIP.';
      }
      if(product.groupType === 'documentos'){
        description = 'Seu pack de documentos está liberado. Você pode editar no Canva e acessar o grupo de documentos.';
      }

      setModal(
        product.icon || 'ti-lock',
        `${product.title} liberado`,
        `${description}${groupButton(product)}`,
        false
      );
    }

    function productNamesFromIds(ids){
      return (ids || []).map(id => products[id]?.title || id).filter(Boolean);
    }

    function mainProductFromUnlocks(ids){
      const priority = [PREMIUM_PRODUCT_ID,'iphone','completo','apple','xiaomi','realme','termoGarantia','videosIphone','artesIphone','ordemServico','documentos','videosAssistencia','artesAssistencia','fornecedores','precificacao','peliculas3d'];
      return priority.find(id => (ids || []).includes(id)) || (ids || [])[0] || selectedUnlockProduct;
    }

    function sectionForProduct(productId){
      if(productId === PREMIUM_PRODUCT_ID) return 'checklist';
      if(['iphone','completo','apple','xiaomi','realme'].includes(productId)) return 'catalogos';
      if(['termoGarantia','videosIphone','artesIphone'].includes(productId)) return 'lojaiPhone';
      if(['documentos','ordemServico','videosAssistencia','artesAssistencia'].includes(productId)) return 'assistencia';
      if(['fornecedores','precificacao','peliculas3d'].includes(productId)) return 'bonus';
      return getActiveSectionId ? getActiveSectionId() : 'inicio';
    }

    function successMessageFromUnlocks(ids){
      const names = productNamesFromIds(ids);
      if(!names.length) return 'Acesso liberado com sucesso!';
      const list = names.slice(0, 2).join(', ');
      const more = names.length > 2 ? ` +${names.length - 2}` : '';
      return `Acesso liberado com sucesso! ${list}${more} disponível na sua conta.`;
    }

    function friendlyRedeemError(error){
      const raw = String(error?.message || error?.details || error?.hint || '').trim();
      const msg = raw.toLowerCase();

      if(msg.includes('invalid_pin') || msg.includes('invalid pin')) return 'PIN inválido. Confira o código recebido e tente novamente.';
      if(msg.includes('not_authenticated') || msg.includes('jwt') || msg.includes('auth')) return 'Faça login novamente antes de liberar o produto.';
      if(msg.includes('pin_usage_limit_reached')) return 'Esse código atingiu o limite de uso.';
      if(msg.includes('redeem_product_pin') || msg.includes('function') || msg.includes('does not exist') || msg.includes('schema cache')) return 'A função de PIN ainda não está ativa no Supabase. Rode o SQL atualizado.';
      if(msg.includes('product_pins') || msg.includes('user_product_access') || msg.includes('access_pins') || msg.includes('relation')) return 'As tabelas de PIN ainda não estão criadas. Rode o SQL atualizado.';
      if(msg.includes('permission denied') || msg.includes('row-level security')) return 'Permissão do banco bloqueando a liberação. Rode o SQL atualizado.';
      return raw ? `Erro do banco: ${raw}` : 'Não foi possível liberar esse PIN agora.';
    }

    function getFirstUnlockedCategory(unlockedIds){
      const ids = Array.isArray(unlockedIds) ? unlockedIds : [];
      if(ids.some(id => ['iphone','completo','apple','xiaomi','realme'].includes(id))) return 'catalogos';
      if(ids.some(id => ['termoGarantia','videosIphone','artesIphone'].includes(id))) return 'lojaiPhone';
      if(ids.some(id => ['documentos','ordemServico','videosAssistencia','artesAssistencia'].includes(id))) return 'assistencia';
      if(ids.some(id => ['fornecedores','precificacao','peliculas3d'].includes(id))) return 'bonus';
      return localStorage.getItem('centralCurrentSection') || 'inicio';
    }

    function showUnlockSuccessModal(unlocks){
      setModal(
        'ti-circle-check',
        'Desbloqueado com sucesso!',
        '<div class="unlock-success-box"><p>Seu acesso foi liberado na sua conta pelo Supabase.</p></div>',
        false
      );

      document.getElementById('modal')?.classList.add('success-modal');
    }

    function closeSuccessModalState(){
      document.getElementById('modal')?.classList.remove('success-modal');
    }

    function normalizeProductId(productId){
      const id = String(productId || '').trim();
      const aliases = {
        garantia: 'termoGarantia',
        artes: 'artesIphone',
        videos: 'videosIphone',
        ordem_servico: 'ordemServico',
        termo_garantia: 'termoGarantia',
        artes_iphone: 'artesIphone',
        videos_iphone: 'videosIphone',
        artes_assistencia: 'artesAssistencia',
        videos_assistencia: 'videosAssistencia',
        peliculas: 'peliculas3d',
        peliculas3d: 'peliculas3d',
        peliculas_3d: 'peliculas3d',
        tabela_peliculas: 'peliculas3d',
        tabela_peliculas_3d: 'peliculas3d',
        tabela_precificacao: 'precificacao',
        premium: 'areaPremium',
        area_premium: 'areaPremium',
        areaPremium: 'areaPremium',
        checklist_premium: 'areaPremium',
        scripts_premium: 'areaPremium',
        biblioteca_ads: 'areaPremium',
        palavras_chave: 'areaPremium'
      };
      return aliases[id] || id;
    }

    function normalizeUnlocksFromRedeemResponse(data){
      let payload = data;

      if(typeof payload === 'string'){
        try{ payload = JSON.parse(payload); }catch(_){ return []; }
      }

      // Alguns RPCs do Supabase retornam o json direto; outros retornam embrulhado.
      if(payload?.redeem_product_pin){ payload = payload.redeem_product_pin; }
      if(payload?.data){ payload = payload.data; }

      if(typeof payload === 'string'){
        try{ payload = JSON.parse(payload); }catch(_){ return []; }
      }

      if(Array.isArray(payload)){
        // Pode vir ['precificacao'] ou [{ product_id:'precificacao' }]
        return payload.map(item => {
          if(typeof item === 'string') return normalizeProductId(item);
          return normalizeProductId(item?.product_id || item?.id || item?.product || '');
        }).filter(Boolean);
      }

      if(Array.isArray(payload?.unlocks)){
        return payload.unlocks.map(normalizeProductId).filter(Boolean);
      }

      if(Array.isArray(payload?.products)){
        return payload.products.map(normalizeProductId).filter(Boolean);
      }

      if(Array.isArray(payload?.product_ids)){
        return payload.product_ids.map(normalizeProductId).filter(Boolean);
      }

      if(payload?.product_id){
        return [normalizeProductId(payload.product_id)].filter(Boolean);
      }

      return [];
    }

    async function redeemAccessCode(code){
      code = String(code || '').replace(/\D/g, '').slice(0, PREMIUM_PIN_LENGTH).trim();

      if(!code){
        showToast('Digite seu PIN de 4 dígitos.');
        return { ok:false, unlocks:[] };
      }

      if(code.length !== PREMIUM_PIN_LENGTH){
        showToast('O PIN deve ter 4 dígitos.');
        return { ok:false, unlocks:[] };
      }

      if(!currentUser?.id){
        showToast('Faça login antes de liberar um produto.');
        return { ok:false, unlocks:[] };
      }

      const unlockedBefore = Array.isArray(unlocked) ? [...unlocked] : [];

      try{
        const rpcPayload = selectedUnlockProduct
          ? { p_pin: code, p_product_id: selectedUnlockProduct }
          : { p_pin: code };

        const { data, error } = await sb.rpc('redeem_product_pin', rpcPayload);

        if(error){
          console.error('Erro ao liberar PIN:', error);
          showToast(friendlyRedeemError(error));
          return { ok:false, unlocks:[] };
        }

        let unlockedByPin = normalizeUnlocksFromRedeemResponse(data);

        // Recarrega a verdade do banco depois do RPC gravar user_product_access.
        await consultarAcessosAtuais({ skipLegacy:true });

        const newAccessFromDatabase = unlocked.filter(productId => !unlockedBefore.includes(productId));
        if(!unlockedByPin.length && newAccessFromDatabase.length){
          unlockedByPin = newAccessFromDatabase;
        }

        // Normaliza, remove ids inexistentes no front e evita duplicidade.
        unlockedByPin = Array.from(new Set(
          (unlockedByPin || [])
            .map(productId => normalizeProductId(productId))
            .filter(productId => productId && products[productId])
        ));

        unlockedByPin.forEach(productId => {
          if(!unlocked.includes(productId)) unlocked.push(productId);
        });

        if(!unlockedByPin.length && selectedUnlockProduct && hasAccess(selectedUnlockProduct)){
          unlockedByPin = [selectedUnlockProduct];
        }

        if(!unlockedByPin.length){
          showToast('PIN validado, mas nenhum produto ativo foi vinculado a ele. Confira os vínculos no Supabase.');
          return { ok:false, unlocks:[] };
        }

        // Cache local só depois de sucesso no banco.
        saveLocalAccessIds(unlockedByPin);
        window.lastUnlockedIds = unlockedByPin;

        if(Array.isArray(unlocked) && unlocked.length > 0){
          cancelFreeTrialPopup();
        }

        render();
        showToast(successMessageFromUnlocks(unlockedByPin));
        return { ok:true, unlocks:unlockedByPin };
      }catch(err){
        console.error('Falha inesperada ao liberar PIN:', err);
        showToast(friendlyRedeemError(err));
        return { ok:false, unlocks:[] };
      }
    }

    async function redeemCodeFromModal(){
      const input = document.getElementById('modalCodeInput');
      const code = sanitizePinInput(input);
      const result = await redeemAccessCode(code);

      if(result?.ok){
        input.value = '';
        closeModal();
        render();
        updatePremiumNavState();
        const target = sectionForProduct(mainProductFromUnlocks(result.unlocks));
        goTo(target);
        showUnlockSuccessModal(result.unlocks);
      }
    }

    async function redeemQuickCode(){
      const input = document.getElementById('quickCodeInput');
      const code = sanitizePinInput(input);
      const result = await redeemAccessCode(code);

      if(result?.ok){
        input.value = '';
        render();
        updatePremiumNavState();
        const target = sectionForProduct(mainProductFromUnlocks(result.unlocks));
        goTo(target);
        showUnlockSuccessModal(result.unlocks);
      }
    }

    function renderThumb(product, statusClass, statusText){
      return `
        <div class="thumb product-thumb"><span class="status ${statusClass}">${statusText}</span>
          ${product.productIcon ? `<img class="product-icon-img" src="${product.productIcon}" alt="${product.title}">` : ''}
        </div>
      `;
    }

    function isBonusProduct(productId){
      return ['fornecedores','precificacao','tabelaTroca','peliculas3d'].includes(productId);
    }

    function canAccessBonus(productId){
      return isBonusProduct(productId) ? (hasCatalogBonusAccess() || hasAccess(productId)) : true;
    }

    function openBonusFile(productId){
      const product = products[productId];
      if(!product) return;

      if(!canAccessBonus(productId)){
        openUnlock(productId);
        return;
      }

      const url = product.downloadUrl || product.previewUrl;
      if(!url){
        showToast('Arquivo indisponível no momento.');
        return;
      }

      openExternal(url, product.title || 'Bônus');
    }

    function openDownloadFile(productId){
      const product = products[productId];
      if(!product) return;

      if(productId === 'tabelaTroca'){
        openExternal('tabela-trocas.html', 'Tabela de Troca de iPhone');
        return;
      }

      if(productId === 'peliculas3d'){
        openExternal('tabela-peliculas-3d.html', 'Tabela de Película 3D');
        return;
      }

      if(productId === 'fornecedores'){
        if(!hasCatalogBonusAccess() && !hasAccess('fornecedores')){
          openUnlock('iphone');
          return;
        }
        openExternal('fornecedores.html', 'Lista de Fornecedores');
        return;
      }

      if(productId === 'precificacao'){
        if(!hasCatalogBonusAccess() && !hasAccess('precificacao')){
          openUnlock('iphone');
          return;
        }
        openExternal('https://drive.google.com/drive/folders/1Hg6tWOo42HVitHD8wwTcTJnDTXrVjGIz?usp=drive_link', 'Tabela de Precificação');
        return;
      }

      if(!canAccessBonus(productId)){
        openUnlock(productId);
        return;
      }

      const url = product.downloadUrl || product.previewUrl;
      if(!url || url === '#'){
        showToast('Arquivo indisponível no momento.');
        return;
      }

      openExternal(url, product.title || 'Bônus');
    }

    function openSuppliersTable(){
      if(!hasSupplierListAccess()){
        showToast('Libere o PIN do catálogo para acessar a lista de fornecedores.');
        openUnlock('iphone');
        return;
      }

      goTo('fornecedores');
      const input = document.getElementById('supplierSearch');
      if(input) input.value = '';
      renderSuppliers('');
      setTimeout(() => document.getElementById('fornecedores')?.scrollIntoView({ behavior:'smooth', block:'start' }), 60);
    }

    function productCard(product){
      const freeProduct = isFreeProduct(product.id);
      const unlockedProduct = freeProduct || hasAccess(product.id);
      const statusClass = unlockedProduct ? 'open' : 'preview';
      const statusText = freeProduct ? 'Gratuito' : (unlockedProduct ? 'Liberado' : 'Prévia');
      const cardClass = product.highlight ? 'card featured-free-card' : 'card';

      const previewButton = freeProduct
        ? `<button class="btn ghost" onclick="openPreviewLink(products['${product.id}'])"><i class="ti ti-eye"></i> Visualizar</button>`
        : isBonusProduct(product.id) && !hasAccess(product.id)
          ? `<button class="btn ghost" onclick="openUnlock('${product.id}')"><i class="ti ti-lock"></i> Visualizar</button>`
          : shouldOpenPreviewPopup(product)
            ? `<button class="btn ghost" onclick="openProductPreviewPopup('${product.id}')"><i class="ti ti-eye"></i> Visualizar</button>`
            : `<button class="btn ghost" onclick="openPreviewLink(products['${product.id}'])"><i class="ti ti-eye"></i> Visualizar</button>`;

      let actionButton = '';

      if(freeProduct){
        if(product.canvaLinks?.length || product.canvaUrl){
          actionButton = `<button class="btn green" onclick="openCanvaLinksPopup('${product.id}')"><i class="ti ti-edit"></i> Editar no Canva</button>`;
        } else {
          actionButton = `<button class="btn green" onclick="openExternal('${product.previewUrl || '#'}','Acessar')"><i class="ti ti-external-link"></i> Acessar</button>`;
        }
      } else if(unlockedProduct){
        if(isCatalogProduct(product)){
          actionButton = `<button class="btn green" onclick="openExternal('${product.canvaUrl || '#'}','Canva')"><i class="ti ti-edit"></i> Editar no Canva</button>`;
        } else if(product.canvaLinks?.length || product.canvaUrl){
          actionButton = `<button class="btn green" onclick="openCanvaLinksPopup('${product.id}')"><i class="ti ti-edit"></i> Editar no Canva</button>`;
        } else if(product.downloadUrl || ['fornecedores','precificacao','peliculas3d'].includes(product.id)){
          actionButton = `<button class="btn green" onclick="openDownloadFile('${product.id}')"><i class="ti ti-external-link"></i> Acessar</button>`;
        } else {
          actionButton = `<button class="btn green" onclick="openAccess('${product.id}')"><i class="ti ti-lock-open"></i> Acessar</button>`;
        }
      } else {
        actionButton = `<button class="btn gold" onclick="openUnlock('${product.id}')"><i class="ti ti-lock"></i> Liberar</button>`;
      }

      if(isBonusProduct(product.id)){
        const visualProducts = ['tabelaTroca','peliculas3d'];
        const isVisualProduct = visualProducts.includes(product.id);
        const bonusUnlocked = product.id === 'tabelaTroca' || hasCatalogBonusAccess() || hasAccess(product.id);
        const bonusStatusClass = bonusUnlocked ? 'open' : 'preview';
        const bonusStatusText = product.id === 'tabelaTroca' ? 'Visualizar' : (bonusUnlocked ? 'Liberado' : 'Prévia');
        const targetMap = {
          fornecedores: 'fornecedores.html',
          precificacao: 'https://drive.google.com/drive/folders/1Hg6tWOo42HVitHD8wwTcTJnDTXrVjGIz?usp=drive_link',
          tabelaTroca: 'tabela-trocas.html',
          peliculas3d: 'tabela-peliculas-3d.html'
        };

        let bonusButton = '';
        if(isVisualProduct){
          const buttonLabel = product.id === 'peliculas3d' ? 'Abrir tabela' : 'Visualizar';
          bonusButton = `<button class="btn ghost" type="button" onclick="openExternal('${targetMap[product.id]}','${product.title}')"><i class="ti ti-eye"></i> ${buttonLabel}</button>`;
        } else if(bonusUnlocked){
          bonusButton = `<button class="btn green" onclick="openDownloadFile('${product.id}')"><i class="ti ti-eye"></i> Visualizar</button>`;
        } else {
          bonusButton = `<button class="btn gold" type="button" onclick="openUnlock('iphone')" title="Libere o PIN do catálogo para acessar."><i class="ti ti-lock"></i> Liberar</button>`;
        }

        return `
          <article class="${cardClass}" id="product-${product.id}">
            ${renderThumb(product, bonusStatusClass, bonusStatusText)}
            <div class="card-body"><h3>${product.title}</h3><p>${product.desc}</p><div class="card-actions one-action">${bonusButton}</div></div></article>
        `;
      }

      return `
        <article class="${cardClass}" id="product-${product.id}">
          ${renderThumb(product, statusClass, statusText)}
          <div class="card-body"><h3>${product.title}</h3><p>${product.desc}</p><div class="card-actions">${previewButton}${actionButton}</div></div></article>
      `;
    }

    function productModule(product){
      if(!product.lessons || !product.lessons.length) return '';
      const lessons = product.lessons.map((lesson, index) => `<div class="lesson"><i class="ti ti-player-play-filled"></i>${index + 1}. ${lesson.title || lesson}</div>`).join('');
      return `
        <div class="module"><div class="module-top"><div class="module-title"><i class="ti ${product.icon}"></i><span>${product.title}</span></div><button class="btn green" style="flex:0 0 auto" onclick="openAccess('${product.id}')">Acessar</button></div><div class="lesson-list">${lessons}</div></div>
      `;
    }

    function hasAnyCatalogAccess(){
      return ['iphone','completo','apple','xiaomi','realme'].some(id => hasAccess(id));
    }

    function hasCatalogBonusAccess(){
      return hasAnyCatalogAccess() || ['fornecedores','precificacao'].some(id => hasAccess(id));
    }

    // Bônus do catálogo: libera para quem desbloqueou qualquer catálogo ou o bônus individual.
    function hasSupplierListAccess(){
      return hasCatalogBonusAccess();
    }

    function catalogLessonsModule(){
      if(!hasAnyCatalogAccess()) return '';
      return `
        <div class="module catalog-lessons-module"><div class="module-top"><div class="module-title"><i class="ti ti-player-play"></i><span>Vídeo aulas dos Catálogos</span></div><button class="btn green" style="flex:0 0 auto" onclick="openCatalogLessons()"><i class="ti ti-player-play"></i> iPhones</button></div><div class="lesson-list">
            ${catalogLessons.map((lesson, index) => `<div class="lesson"><i class="ti ti-player-play-filled"></i>${index + 1}. ${lesson.title}</div>`).join('')}
          </div></div>
      `;
    }

    function catalogLessonCards(){
      return catalogLessons.map((lesson, index) => `
        <article class="lesson-select-card"><div class="lesson-select-icon"><i class="ti ti-player-play"></i></div><div class="lesson-select-body"><span>Aula ${index + 1}</span><h4>${lesson.title || `Aula ${index + 1}`}</h4><p>${lesson.desc || 'Assista ao tutorial dentro da plataforma.'}</p></div><button class="btn green" onclick="openLessonEmbed(${index})"><i class="ti ti-player-play"></i> iPhones</button></article>
      `).join('');
    }

    function openLessonEmbed(index){
      const lesson = catalogLessons[index];
      if(!lesson) return;

      setModal(
        'ti-player-play',
        lesson.title || `Aula ${index + 1}`,
        `<div class="video-frame single-video-frame"><iframe
            src="${lesson.embed}"
            title="${lesson.title || 'Aula'}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe></div><div class="video-lesson-info embed-info"><p>${lesson.desc || 'Assista ao tutorial dentro da plataforma.'}</p><button class="btn ghost" onclick="openExternal('${lesson.youtube}','${lesson.title || 'Aula'}')"><i class="ti ti-external-link"></i> Abrir no YouTube
          </button></div>`,
        false
      );

      document.getElementById('modal')?.classList.add('video-modal');
    }

    function openCatalogLessons(){
      if(!hasAnyCatalogAccess()){
        showToast('Libere um catálogo para acessar as vídeo aulas.');
        return;
      }

      setModal(
        'ti-player-play',
        'Vídeo aulas dos Catálogos',
        `<div class="video-lessons-intro">Escolha uma aula para assistir dentro da plataforma.</div><div class="lesson-select-grid">${catalogLessonCards()}</div>`,
        false
      );

      document.getElementById('modal')?.classList.add('video-modal');
    }

    function closeVideoModalState(){
      document.getElementById('modal')?.classList.remove('video-modal');
    }

    function openCatalogVipGroup(){
      if(!hasAnyCatalogAccess()){
        showToast('Libere um catálogo para acessar o grupo VIP.');
        return;
      }

      openExternal(GRUPO_CATALOGOS_URL, 'Assistência WhatsApp');
    }

    function catalogAccessCard(type){
      const unlockedCatalog = hasAnyCatalogAccess();
      const isLessons = type === 'lessons';

      const icon = isLessons ? 'ti-player-play' : 'ti-brand-whatsapp';
      const title = isLessons ? 'Vídeo Tutorial' : 'Grupo WhatsApp VIP';
      const desc = isLessons
        ? (unlockedCatalog ? 'Assista ao tutorial e aprenda a editar seu catálogo no Canva.' : 'Libere um catálogo com seu PIN para assistir ao tutorial.')
        : (unlockedCatalog ? 'Entre no grupo VIP para receber avisos, novidades e orientações.' : 'Libere um catálogo com seu PIN para entrar no grupo VIP.');
      const action = isLessons ? 'openCatalogLessons()' : 'openCatalogVipGroup()';

      return `
        <article class="card catalog-access-product-card ${unlockedCatalog ? 'open' : 'locked'}" id="product-${isLessons ? 'catalogTutorial' : 'catalogWhatsappVip'}"><div class="thumb catalog-access-thumb"><span class="status ${unlockedCatalog ? 'open' : 'preview'}">${unlockedCatalog ? 'Liberado' : 'Bloqueado'}</span><span class="catalog-access-thumb-icon ${isLessons ? '' : 'whatsapp'}"><i class="ti ${icon}"></i></span></div><div class="card-body"><h3>${title}</h3><p>${desc}</p><div class="card-actions"><button class="btn ${unlockedCatalog ? (isLessons ? 'green' : 'whatsapp-btn') : 'gold'}" onclick="${unlockedCatalog ? action : "openUnlock('iphone')"}"><i class="ti ${unlockedCatalog ? icon : 'ti-lock'}"></i> ${unlockedCatalog ? (isLessons ? 'Ver tutorial' : 'Entrar no grupo VIP') : 'Liberar'}
              </button></div></div></article>
      `;
    }

    function catalogQuickLinksCard(){
      return `
        <div class="catalog-quick-links catalog-quick-links-highlight">
          <button class="catalog-quick-link quick-tutorial" type="button" onclick="scrollToCatalogFooter('product-catalogTutorial')"><span>Tutorial</span><i class="ti ti-player-play"></i></button>
          <button class="catalog-quick-link quick-whatsapp" type="button" onclick="scrollToCatalogFooter('product-catalogWhatsappVip')"><span>Grupo VIP</span><i class="ti ti-brand-whatsapp"></i></button>
          <button class="catalog-quick-link quick-warranty" type="button" onclick="scrollToCatalogFooter('product-termoGarantia')"><span>Garantia</span><i class="ti ti-shield-check"></i></button>
          <button class="catalog-quick-link quick-extra" type="button" onclick="scrollToCatalogFooter('product-videosIphone')"><span>Extras</span><i class="ti ti-package"></i></button>
        </div>
      `;
    }

    function scrollToCatalogFooter(id){
      const el = document.getElementById(id);
      if(el){ goTo('catalogos'); setTimeout(() => el.scrollIntoView({ behavior:'smooth', block:'start' }), 60); }
    }

    function renderCatalogAccess(){
      const grid = document.getElementById('catalogAccessGrid');
      if(!grid) return;

      grid.innerHTML = '';
    }

    function getUnlockedProducts(){
      return unlocked.map(id => products[id]).filter(Boolean);
    }

    function shouldShowCompleteUpgrade(){
      return hasAccess('iphone') && !hasAccess('completo');
    }

    function completeUpgradeOffer(){
      return `
        <div class="upgrade-top-offer"><div class="upgrade-top-content"><span class="upgrade-top-badge"><i class="ti ti-sparkles"></i> Upgrade exclusivo</span><h3>Adicione Xiaomi, Realme e Apple por mais R$49,00</h3><p>Você já tem o Catálogo de iPhones. Complete sua vitrine com os outros catálogos editáveis.</p><div class="upgrade-top-list"><span><i class="ti ti-check"></i> Xiaomi</span><span><i class="ti ti-check"></i> Realme</span><span><i class="ti ti-check"></i> Apple</span></div></div><button class="btn upgrade-top-btn" onclick="openUnlock('completo')"><i class="ti ti-lock-open"></i> Liberar por R$49
          </button></div>
      `;
    }


    function catalogExtraDivider(){
      return `<div class="catalog-extra-divider"><span>Extras</span><p>Vídeos, artes e materiais complementares.</p></div>`;
    }

    function bonusWhatsappCard(){
      const unlockedBonus = hasCatalogBonusAccess() || hasAnyCatalogAccess();
      const statusClass = unlockedBonus ? 'open' : 'preview';
      const statusText = unlockedBonus ? 'Liberado' : 'Bloqueado';
      const actionButton = unlockedBonus
        ? `<button class="btn green" onclick="openExternal(GRUPO_CATALOGOS_URL,'Grupo WhatsApp VIP')"><i class="ti ti-brand-whatsapp"></i> Entrar</button>`
        : `<button class="btn gold" type="button" onclick="openUnlock('iphone')"><i class="ti ti-lock"></i> Liberar</button>`;
      return `
        <article class="card" id="product-whatsappVip">
          <div class="thumb product-thumb"><span class="status ${statusClass}">${statusText}</span><img class="product-icon-img" alt="Grupo WhatsApp VIP" src="${products.fornecedores.productIcon}"></div>
          <div class="card-body"><h3>Grupo WhatsApp VIP</h3><p>Entre no grupo exclusivo para receber avisos, novidades e orientações.</p><div class="card-actions one-action">${actionButton}</div></div>
        </article>
      `;
    }

    function homeCategoryCard(title, subtitle, productId, sectionId){
      const icons = {
        catalogos:'ti-device-mobile',
        lojaiPhone:'ti-building-store',
        assistencia:'ti-tools',
        bonus:'ti-folder-star'
      };
      const icon = icons[sectionId] || 'ti-layout-grid';

      return `
        <button class="home-vector-card" type="button" onclick="goTo('${sectionId}')"><span class="home-vector-icon"><i class="ti ${icon}"></i></span><span class="home-vector-text"><strong>${title}</strong><small>${subtitle}</small></span><i class="ti ti-chevron-right home-vector-arrow"></i></button>
      `;
    }

    function normalizePixelText(str){
      return String(str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    }

    function pixelBrandRank(brand){
      const order = ['Apple','Samsung','Motorola','Xiaomi','Realme','Infinix'];
      const idx = order.indexOf(brand);
      return idx >= 0 ? idx : 99;
    }

    function getPixelBrands(){
      return [...new Set(PIXEL_PELICULAS_DATA.map(item => item.marca).filter(Boolean))]
        .sort((a,b) => pixelBrandRank(a) - pixelBrandRank(b) || a.localeCompare(b));
    }

    function renderPixelBrandButtons(){
      const brands = getPixelBrands();
      return [`<button class="pixel-brand-btn ${pixelSelectedBrand === '' ? 'active' : ''}" onclick="selectPixelBrand('')">Todas</button>`]
        .concat(brands.map(brand => `<button class="pixel-brand-btn ${pixelSelectedBrand === brand ? 'active' : ''}" onclick="selectPixelBrand('${String(brand).replace(/'/g,"\\'")}')">${brand}</button>`))
        .join('');
    }

    function selectPixelBrand(brand){
      pixelSelectedBrand = brand || '';
      renderPixelPreviewList();
    }

    function clearPixelSearch(){
      const input = document.getElementById('pixelSearchInput');
      if(input) input.value = '';
      pixelSelectedBrand = '';
      renderPixelPreviewList();
    }

    function isPixelUnlocked(item){
      return PIXEL_FREE_MODELS.has(item.modelo_principal) || hasCatalogBonusAccess() || hasAccess('peliculas3d');
    }

    function pixelSort(a,b){
      const au = isPixelUnlocked(a) ? 0 : 1;
      const bu = isPixelUnlocked(b) ? 0 : 1;
      return au - bu || pixelBrandRank(a.marca) - pixelBrandRank(b.marca) || a.modelo_principal.localeCompare(b.modelo_principal);
    }

    function pixelCard(item){
      const unlocked = isPixelUnlocked(item);
      if(unlocked){
        const chips = (item.modelos_compativeis || []).map(c => `<span class="pixel-chip">${c}</span>`).join('');
        return `
          <article class="pixel-card"><div class="pixel-icon"><i class="ti ti-device-mobile"></i></div><div><h3>${item.modelo_principal}</h3><p>${item.marca} • compatibilidade liberada</p></div><span class="pixel-pill">${(item.modelos_compativeis || []).length} compatíveis</span><div class="pixel-compat">${chips || '<span class="pixel-chip">Nenhum compatível cadastrado</span>'}</div></article>
        `;
      }

      return `
        <article class="pixel-card locked"><div class="pixel-icon"><i class="ti ti-lock"></i></div><div><h3>${item.modelo_principal}</h3><p>${item.marca} • disponível no acesso completo</p></div><span class="pixel-pill lock">Bloqueado</span><div class="pixel-locked-msg">
            Este modelo está na base. Compre a tabela completa ou digite o PIN recebido para liberar todas as compatibilidades.
            <button class="btn gold" style="width:100%;margin-top:10px" onclick="openUnlock('peliculas3d')"><i class="ti ti-lock-open"></i> Liberar
            </button></div></article>
      `;
    }

    function renderPixelPreviewList(){
      const input = document.getElementById('pixelSearchInput');
      const list = document.getElementById('pixelPreviewList');
      const brandsEl = document.getElementById('pixelBrandButtons');
      const countEl = document.getElementById('pixelVisibleCount');
      if(!list) return;

      const q = normalizePixelText(input?.value || '');
      let filtered = PIXEL_PELICULAS_DATA.filter(item => {
        const text = normalizePixelText(item.modelo_principal + ' ' + item.marca);
        const matchesSearch = !q || text.includes(q);
        const matchesBrand = !pixelSelectedBrand || item.marca === pixelSelectedBrand;
        return matchesSearch && matchesBrand;
      }).sort(pixelSort);

      brandsEl.innerHTML = renderPixelBrandButtons();
      countEl.textContent = `${filtered.length} resultados`;
      list.innerHTML = filtered.map(pixelCard).join('');
    }

    function pixelPeliculasPreview(){
      const freeCount = PIXEL_FREE_MODELS.size;
      return `
        <div class="pixel-preview-wrap"><div class="pixel-hero"><span>Consulta rápida</span><h3>Tabela Películas 3D</h3><p>Digite o modelo do aparelho para encontrar películas compatíveis. Alguns modelos ficam liberados para teste; o acesso completo mostra toda a base.</p></div><div class="pixel-search-box"><input id="pixelSearchInput" type="search" placeholder="Digite o modelo. Ex: Samsung A03 ou Redmi 13C" oninput="renderPixelPreviewList()" autocomplete="off"><button class="pixel-clear-btn" type="button" onclick="clearPixelSearch()">Limpar</button></div><div class="pixel-brand-buttons" id="pixelBrandButtons"></div><div class="pixel-stats"><span class="pixel-stat">${PIXEL_PELICULAS_DATA.length} modelos na base</span><span class="pixel-stat">${getPixelBrands().length} marcas</span><span class="pixel-stat">${freeCount} liberados para teste</span><span class="pixel-stat" id="pixelVisibleCount">0 resultados</span></div><div class="pixel-list" id="pixelPreviewList"></div></div>
      `;
    }

    function catalogSetupHelpCard(){
      return `
        <div class="catalog-setup-help"><div class="catalog-setup-icon"><i class="ti ti-brand-whatsapp"></i></div><div class="catalog-setup-content"><span>Configuração do catálogo</span><h3>Quer receber tudo pronto?</h3><p>Eu configuro seu catálogo com logo, WhatsApp e lista de preços para você começar a enviar aos clientes.</p></div><button class="btn catalog-setup-btn" onclick="openExternal('https://wa.me/5511949185861?text=Ol%C3%A1%2C%20desbloqueei%20meu%20cat%C3%A1logo%20na%20%C3%A1rea%20de%20membros%20e%20quero%20ajuda%20para%20configurar%20com%20logo%2C%20WhatsApp%20e%20lista%20de%20pre%C3%A7os.','Configuração do catálogo')"><i class="ti ti-brand-whatsapp"></i> Pedir configuração</button></div>
      `;
    }

    function render(){
      document.getElementById('homeGrid').innerHTML = [
        homeCategoryCard('Catálogos','Veja os modelos disponíveis.','iphone','catalogos'),
        homeCategoryCard('Assistência Técnica','Documentos e materiais para sua assistência.','documentos','assistencia'),
        homeCategoryCard('Bônus','Fornecedores, precificação, películas 3D e grupo VIP.','peliculas3d','bonus')
      ].join('');

      const catalogUpgradeTopOffer = document.getElementById('catalogUpgradeTopOffer');
      if(catalogUpgradeTopOffer){
        catalogUpgradeTopOffer.innerHTML = '';
      }

      const catalogSetupHelp = document.getElementById('catalogSetupHelp');
      if(catalogSetupHelp){
        catalogSetupHelp.innerHTML = hasAnyCatalogAccess() ? catalogSetupHelpCard() : '';
      }

      const catalogQuickLinks = document.getElementById('catalogQuickLinks');
      if(catalogQuickLinks){
        catalogQuickLinks.innerHTML = catalogQuickLinksCard();
      }

      // Mantém os atalhos especiais ocultos até existir acesso liberado por PIN.
      if(typeof showCatalogShortcuts === 'function' && typeof hideCatalogShortcuts === 'function'){
        if(hasAnyCatalogAccess()) showCatalogShortcuts();
        else hideCatalogShortcuts();
      }

      document.getElementById('catalogGrid').innerHTML = ['iphone','apple','xiaomi','realme'].map(id => productCard(products[id])).join('') + catalogAccessCard('lessons') + catalogAccessCard('whatsapp') + catalogExtraDivider() + ['termoGarantia','videosIphone','artesIphone'].map(id => productCard(products[id])).join('');
      renderCatalogAccess();
      const catalogUpgrade = document.getElementById('catalogUpgradeOffer');
      if(catalogUpgrade){ catalogUpgrade.innerHTML = ''; }
      document.getElementById('lojaIphoneGrid').innerHTML = ''; // Conteúdos de iPhone movidos para Catálogos
      document.getElementById('assistenciaGrid').innerHTML = ['ordemServico','documentos','videosAssistencia','artesAssistencia'].map(id => productCard(products[id])).join('');
      document.getElementById('bonusGrid').innerHTML = [productCard(products.fornecedores), productCard(products.precificacao), productCard(products.tabelaTroca), productCard(products.peliculas3d)].join('');
      if(document.getElementById('suppliersGrid')) renderSuppliers(document.getElementById('supplierSearch')?.value || '');
      setTimeout(renderPixelPreviewList, 0);
    }

    setupPinInputs();

    document.getElementById('modal').addEventListener('click', event => {
      if(event.target.id === 'modal') closeModal();
    });
    document.addEventListener('keydown', event => {
      if(event.key === 'Escape') closeModal();
      if(event.key === 'Enter' && document.getElementById('modalCodeArea').classList.contains('show')){
        redeemCodeFromModal();
      }
    });

    let onboardingStepIndex = 0;
    const onboardingTotalSteps = 4;

    function updateOnboardingUI(){
      document.querySelectorAll('[data-onboard-step]').forEach(function(step){
        step.classList.toggle('active', Number(step.dataset.onboardStep) === onboardingStepIndex);
      });
      const progress = document.getElementById('onboardingProgress');
      if(progress) progress.style.width = (((onboardingStepIndex + 1) / onboardingTotalSteps) * 100) + '%';
      const nextBtn = document.getElementById('onboardingNextBtn');
      if(nextBtn){
        nextBtn.innerHTML = onboardingStepIndex === onboardingTotalSteps - 1
          ? '<i class="ti ti-check"></i> Entrar na plataforma'
          : 'Continuar';
      }
    }

    function openOnboarding(){
      onboardingStepIndex = 0;
      updateOnboardingUI();
      closeAllPopups('onboardingModal');
      const modal = document.getElementById('onboardingModal');
      if(modal){
        modal.classList.add('show');
        modal.setAttribute('aria-hidden','false');
      }
    }

    function finishOnboarding(){
      localStorage.setItem('centralLojistaOnboardingV1','done');
      const modal = document.getElementById('onboardingModal');
      if(modal){
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden','true');
      }
    }

    function nextOnboardingStep(){
      if(onboardingStepIndex < onboardingTotalSteps - 1){
        onboardingStepIndex += 1;
        updateOnboardingUI();
        return;
      }
      finishOnboarding();
    }

    function maybeShowOnboarding(){ localStorage.setItem('centralLojistaOnboardingV1','done'); }

    const SUPPLIERS_IPHONE = [
      {name:'KOIOSHOP', phone:'+5511974308780'},
      {name:'YICELL', phone:'+5511953433716'},
      {name:'ARMANDO IPHONES', phone:'+5511951909988'},
      {name:'SEVENSTARS', phone:'+5511947911434'},
      {name:'ABBAS', phone:'+5511952758933'},
      {name:'BLACKCELL', phone:'+5511910838298'},
      {name:'CLARICELL', phone:'+5511948165796'},
      {name:'AN IPHONES', phone:'+5511970718770'},
      {name:'HYH', phone:'+5511954236940'},
      {name:'ARMANDO', phone:'+5511984798723'},
      {name:'HAIDAR', phone:'+5511943777777'},
      {name:'ANDRESSA', phone:'+5511933511954'},
      {name:'IMAX HASSAN', phone:'+5511978029336'},
      {name:'ISMART', phone:'+5511939274427'},
      {name:'CELULARES', phone:'+5511953138304'},
      {name:'FONIX', phone:'+5511994623278'},
      {name:'PF', phone:'+5511976257290'},
      {name:'PENTALFA PLAY', phone:'+5511976257290'},
      {name:'IPHONE 1', phone:'+5511967131313'},
      {name:'Z MOBILE', phone:'+5511978264640'},
      {name:'BOM DIA', phone:'+5511977950740'},
      {name:'AZF', phone:'+96181618324'},
      {name:'IPHONE 2', phone:'+5511934319998'},
      {name:'FACE PHONE', phone:'+5511988968322'},
      {name:'FONE HOUSE', phone:'+5511994764714'},
      {name:'HM', phone:'+5545998501851'},
      {name:'MSH', phone:'+5511913335335'},
      {name:'IPHONE 3', phone:'+5511995001745'},
      {name:'JWA', phone:'+5511973289181'},
      {name:'IPHONE 4', phone:'+5511956068598'},
      {name:'IPHONE 5', phone:'+5511968496757'},
      {name:'HAYDOURA', phone:'+5511962386230'},
      {name:'IPHONE 5 (2)', phone:'+5511973072707'},
      {name:'MUSTAFA', phone:'+5511979980110'},
      {name:'MALAK', phone:'+5511962159179'},
      {name:'NASSER', phone:'+5511991282277'},
      {name:'A8', phone:'+5511992455858'},
      {name:'HAMADI', phone:'+5511951942338'},
      {name:'R PHONE', phone:'+5511959238077'},
      {name:'RITAJ', phone:'+5511939012991'},
      {name:'SOUNA', phone:'+5511932325558'},
      {name:'REI CELL', phone:'+5511965627161'},
      {name:'ZOI CELL', phone:'+5511945149959'},
      {name:'SAM CELL', phone:'+5511944787767'},
      {name:'ADELS', phone:'+5511962284545'},
      {name:'ZAZA CELL', phone:'+5511952026870'},
      {name:'ALFA CELL', phone:'+5511964472092'},
      {name:'TIO CELL', phone:'+5511949522220'},
      {name:'INFINIX', phone:'+5511915338452'},
      {name:'ALI', phone:'+5511998806580'},
      {name:'NEW DOSE', phone:'+5511995224825'},
      {name:'MOZART', phone:'+5511983740228'}
    ];
    function supplierWhatsAppUrl(phone, name){
      const clean = String(phone).replace(/[^0-9]/g,'');
      const msg = encodeURIComponent('Olá, eu peguei seu contato com @oluccasiphone, pode me enviar sua lista de preços por favor.');
      return `https://wa.me/${clean}?text=${msg}`;
    }
    function renderSuppliers(filter=''){
      const grid = document.getElementById('suppliersGrid');
      const count = document.getElementById('supplierCount');
      if(!grid) return;
      const term = String(filter || '').toLowerCase().trim();
      const list = SUPPLIERS_IPHONE.filter(s => s.name.toLowerCase().includes(term) || s.phone.includes(term));
      if(count) count.textContent = `${list.length} de ${SUPPLIERS_IPHONE.length} fornecedores`;
      grid.innerHTML = list.map(s => `
        <article class="supplier-card"><div class="supplier-icon">${s.name.slice(0,2).replace(/[^A-Za-z0-9]/g,'').toUpperCase() || 'IP'}</div><div><h3>${s.name}</h3><p>${s.phone}</p><div class="supplier-actions"><a class="btn whatsapp-btn" href="${supplierWhatsAppUrl(s.phone, s.name)}" target="_blank" rel="noopener"><i class="ti ti-brand-whatsapp"></i> WhatsApp</a></div></div></article>`).join('') || '<div class="empty"><h3>Nenhum fornecedor encontrado</h3><p>Tente buscar por outro nome ou número.</p></div>';
    }
    document.addEventListener('DOMContentLoaded', function(){ renderSuppliers(); });

    window.addEventListener('DOMContentLoaded', async function(){
      try{
        const { data:{ session } } = await sb.auth.getSession();

        if(session?.user){
          currentUser = session.user;
          await consultarAcessosAtuais();
          showApp();
        } else {
          showLogin();
        }

        sb.auth.onAuthStateChange(async function(event, sessionAtual){
          if(event === 'SIGNED_IN' && sessionAtual?.user){
            currentUser = sessionAtual.user;
            await consultarAcessosAtuais();
            showApp();
          }
          if(event === 'SIGNED_OUT'){
            cancelFreeTrialPopup();
            currentUser = null;
            unlocked = [];
            showLogin();
          }
        });
      }catch(err){
        console.error(err);
        showLogin();
      }
    });

/* Atalhos da aba Catálogos:
   ficam ocultos até o cliente desbloquear o catálogo com PIN.
   No sistema final, chame showCatalogShortcuts() logo após validar o PIN. */
const CATALOG_UNLOCKED = false; // Atalhos liberados somente após acesso válido por PIN.
function showCatalogShortcuts(){
  const el = document.getElementById("catalogUnlockedShortcuts");
  if(el) el.style.display = "grid";
}
function hideCatalogShortcuts(){
  const el = document.getElementById("catalogUnlockedShortcuts");
  if(el) el.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function(){
  if(CATALOG_UNLOCKED){ showCatalogShortcuts(); } else { hideCatalogShortcuts(); }
});
document.addEventListener("click", function(e){
  const link = e.target.closest('.catalog-shortcuts a[href^="#"]');
  if(!link) return;
  const target = document.querySelector(link.getAttribute("href"));
  if(!target) return;
  e.preventDefault();
  target.scrollIntoView({behavior:"smooth", block:"start"});
});

let deferredPwaPrompt = null;
window.addEventListener('beforeinstallprompt', function(event){
  event.preventDefault();
  deferredPwaPrompt = event;
  const btn = document.getElementById('pwaInstallBtn');
  if(btn){ btn.style.display = 'inline-flex'; btn.classList.add('ready'); }
});
window.addEventListener('appinstalled', function(){
  deferredPwaPrompt = null;
  if(typeof showToast === 'function') showToast('Aplicativo instalado com sucesso!');
});
function isIosDevice(){ return /iphone|ipad|ipod/i.test(navigator.userAgent || '') || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); }
function isStandalonePwa(){ return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true; }
function openPwaHelp(){ if(typeof closeAllPopups === 'function') closeAllPopups('pwaHelpModal'); const el = document.getElementById('pwaHelpModal'); if(el){ el.classList.add('show'); el.setAttribute('aria-hidden','false'); } }
function closePwaHelp(){ const el = document.getElementById('pwaHelpModal'); if(el){ el.classList.remove('show'); el.setAttribute('aria-hidden','true'); } }
async function triggerPwaInstall(){
  if(isStandalonePwa()){ if(typeof showToast === 'function') showToast('O app já está salvo neste aparelho.'); closePwaHelp(); return; }
  if(deferredPwaPrompt){
    deferredPwaPrompt.prompt();
    try{ await deferredPwaPrompt.userChoice; }catch(e){}
    deferredPwaPrompt = null;
    closePwaHelp();
    return;
  }
  openPwaHelp();
}
function handleInstallClick(){
  if(isIosDevice() || !deferredPwaPrompt){ openPwaHelp(); return; }
  triggerPwaInstall();
}
document.addEventListener('click', function(e){ if(e.target && e.target.id === 'pwaHelpModal') closePwaHelp(); });
if('serviceWorker' in navigator){ window.addEventListener('load', function(){ navigator.serviceWorker.register('./service-worker.js').catch(function(err){ console.warn('Service worker não registrado:', err); }); }); }

const HOME_VIDEO_EMBED = 'https://www.youtube.com/embed/T21p4FB51zY';

  function openHomeVideo(){
    const overlay = document.getElementById('homeVideoOverlay');
    const frame = document.getElementById('homeVideoFrame');
    frame.src = HOME_VIDEO_EMBED + '?autoplay=1&mute=0&playsinline=1&rel=0&modestbranding=1&controls=1';
    overlay.classList.add('show');
  }

  function closeHomeVideo(){
    const overlay = document.getElementById('homeVideoOverlay');
    const frame = document.getElementById('homeVideoFrame');
    overlay.classList.remove('show');
    frame.src = '';
  }

function premiumCopy(el){
  const text = el?.dataset?.copy || el?.innerText || '';
  if(!text.trim()) return;
  navigator.clipboard.writeText(text.trim()).then(() => {
    if(typeof showToast === 'function') showToast('Copiado para a área de transferência.');
  }).catch(() => {
    const ta=document.createElement('textarea');
    ta.value=text.trim();document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();
    if(typeof showToast === 'function') showToast('Copiado para a área de transferência.');
  });
}
function updatePremiumChecklist(input){
  const box = input.closest('.premium-check-module');
  if(!box) return;
  const total = box.querySelectorAll('input[type="checkbox"]').length;
  const done = box.querySelectorAll('input[type="checkbox"]:checked').length;
  const count = box.querySelector('.premium-check-count');
  if(count) count.textContent = `${done}/${total}`;
}

function premiumGoScript(category, btn){
  const target = document.getElementById('script-' + category);
  if(!target) return;
  document.querySelectorAll('.premium-script-tab').forEach(item => item.classList.remove('active'));
  if(btn) btn.classList.add('active');
  target.open = true;
  target.scrollIntoView({behavior:'smooth', block:'start'});
}
