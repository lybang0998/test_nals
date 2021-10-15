import React from 'react';
import './Thanks.scss'

function Thanks(props) {
    return (

        <section className="thanks">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="thanks-card">
                            <div className="thanks-card__image">
                                <img src="https://nals.vn/wp-content/uploads/2021/03/NAL_logo_botrang-01-e1616117397127.png" />
                            </div>
                            <div className="thanks-card__details">
                                <div className="thanks-card__content">
                                    <h4>Kính gửi NAL SOLUTION,</h4>
                                    <p>Em là Bằng. Cảm ơn Anh/Chị đã tạo điều kiện cho em tham dự ứng tuyển vào vị trí Front-End Developer.
                                        Đây là dịp rất may mắn với em vì có cơ hội thể hiện nguyện vọng của mình với Quý công ty.</p>
                                    <p>Em thật sự hy vọng và mong muốn được làm việc lâu dài cho công ty. Mong rằng trình độ chuyên môn và kinh nghiệm của em sẽ đáp ứng được yêu cầu vị trí ứng tuyển.</p>
                                    <p>Dù kết quả như thế nào, em cũng xin chân thành cám ơn Anh/Chị đã dành thời gian quý báu của mình để phỏng vấn em. Hy vọng sẽ có cơ hội làm việc cùng Anh/Chị trong tương lai.</p>
                                    <p>Chúc Anh/Chị có thật nhiều sức khỏe, nhiều niềm vui. Chúc Quý công ty ngày càng phát triển và đạt được nhiều thành tựu mới.</p>
                                    <p>Trân trọng,</p>
                                </div>
                                {/* <div className="center">
                                    <h1>Someone famous<br /><span>team leader</span></h1>
                                    <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="thanks-card">
                            <div className="thanks-card__image">
                                <img src="data:image/png;base64,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" />
                            </div>
                            <div className="thanks-card__details">
                                <div className="thanks-card__content">
                                    <h4>Kính gửi Ban tuyển dụng công ty Green Speed,</h4>
                                    <p>Em là Bằng, vừa qua đã được quý công ty cho phép tham dự cuộc phỏng vấn tuyển dụng vào vị trí Front-End Developer thuộc công ty NAL SOLUTIONS.</p>
                                    <p>Buổi phỏng vấn vừa qua là một cơ hội rất quý báu đối với em. Vì em được trực tiếp thể hiện khả năng và nguyện vọng của mình. Nhờ vào cuộc phỏng vấn, em đã hiểu rõ hơn về bản thân mình cũng như biết thêm về phong cách làm việc chuyên nghiệp, thân thiện của Quý công ty.</p>
                                    <p>Em xin gửi lời cám ơn chân thành đến Anh/Chị vì đã dành thời gian quý báu của mình để phỏng vấn em.</p>
                                    <p>Chúc Anh/Chị thật nhiều niềm vui, dồi dào sức khoẻ. Chúc Quý công ty ngày càng phát triển và đạt nhiều thành công mới.</p>
                                    <p>Trân trọng,</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    );
}

export default Thanks;