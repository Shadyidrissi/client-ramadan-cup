import React from 'react';

function Page() {
    return (
        <div id='players' style={{ direction: "rtl", textAlign: "right" }}>
            <div id='players-header'>
                <h1>قوانين اللاعبين في دورة رمضان</h1>
                <p>
                    في دورة رمضان الكروية، يتم تصنيف اللاعبين إلى ثلاث فئات رئيسية بناءً على مهاراتهم ومستواهم الفني في اللعب.
                    لضمان العدالة بين الفرق، يجب أن يتكون كل فريق من 5 لاعبين بحيث يشمل: 
                    2 لاعبين جيدين، 1 لاعب متوسط، و2 لاعبين ضعيفين. لا يُسمح بتغيير هذه التشكيلة لضمان التوازن في المنافسة.
                </p>
                <h2>تصنيف اللاعبين:</h2>
                <ul>
                    <li><span style={{ backgroundColor: "black", padding: "5px 15px", display: "inline-block" }}></span> : اللاعب الجيد</li>
                    <li><span style={{ backgroundColor: "yellow", padding: "5px 15px", display: "inline-block" }}></span> : اللاعب المتوسط</li>
                    <li><span style={{ backgroundColor: "red", padding: "5px 15px", display: "inline-block" }}></span> : اللاعب الضعيف</li>
                </ul>

                <h2>نظام العقوبات:</h2>
                <p>لحماية روح المنافسة واللعب النظيف، يتم تطبيق نظام البطاقات خلال المباريات:</p>
                <ul>
                    <li><span style={{ backgroundColor: "yellow", padding: "5px 15px", display: "inline-block" }}></span> : البطاقة الصفراء - تحذير فقط، دون أي إجراء.</li>
                    <li><span style={{ backgroundColor: "red", padding: "5px 15px", display: "inline-block" }}></span> : البطاقة الحمراء - خروج اللاعب من المباراة لمدة 5 دقائق.</li>
                </ul>
            </div>

            {/* قسم عرض اللاعبين حسب تصنيفهم */}
            <div id='players-body' style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                <div>
                    <h4 style={{ backgroundColor: "black", color: "white", padding: "10px" }}>اللاعبون الجيدون</h4>
                    <ul>
                        <li>شادي</li>
                        <li>علي</li>
                        <li>معاذ</li>
                        <li>زيكو</li>
                        <li>بسلة</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ backgroundColor: "yellow", padding: "10px" }}>اللاعبون المتوسطون</h4>
                    <ul>
                        <li>سامي</li>
                        <li>كمال</li>
                        <li>يونس</li>
                        <li>سيف</li>
                        <li>جواد</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ backgroundColor: "red", color: "white", padding: "10px" }}>اللاعبون الضعيفون</h4>
                    <ul>
                        <li>عماد</li>
                        <li>مراد</li>
                        <li>فيصل</li>
                        <li>سعيد</li>
                        <li>طه</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Page;
