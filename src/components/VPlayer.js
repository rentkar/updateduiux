import React from 'react'
import './VPlayer.css'

export class VPlayer extends React.Component {

    componentDidMount() {
        var numb = this.props.numb
        var videoPlayButton,
            videoWrapper = document.getElementsByClassName('videoPlayer')[numb],
            video = document.getElementsByTagName('video')[numb],
            videoMethods = {
                renderVideoPlayButton: function () {
                    if (videoWrapper.contains(video)) {
                        this.formatVideoPlayButton()
                        console.log(videoWrapper)
                        video.classList.add('has-media-controls-hidden')
                        console.log()
                        videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[numb]

                        videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                    }
                },

                formatVideoPlayButton: function () {

                    videoWrapper.insertAdjacentHTML('beforeend', '\
                    <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                        <circle cx="100" cy="100" r="90" fill="#fff" stroke-width="15" stroke="#fff"/>\
                        <polygon points="70, 55 70, 145 145, 100" fill="#E4E4E4"/>\
                    </svg>\
                ')

                },

                hideVideoPlayButton: function () {
                    video.play()
                    videoPlayButton.classList.add('is-hidden')
                    video.classList.remove('has-media-controls-hidden')
                    video.setAttribute('controls', 'controls')
                }
            }
        videoMethods.renderVideoPlayButton()
    }

    render() {
        return (
            <div className='videoPlayer'>
                <video className='vFrame' controls>
                    <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4" type='video/mp4' />
                </video>
            </div>
        )
    }
}
export default VPlayer