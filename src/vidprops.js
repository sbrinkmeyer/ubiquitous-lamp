const ffmpeg = require('fluent-ffmpeg');

/**
 * Get movie details (duration, resolution, codec, etc.)
 * @param {string} filePath - Path to the movie file
 * @returns {Promise<object>} - Metadata about the movie
 */
function getVidProps(filePath) {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(filePath, (err, metadata) => {
            if (err) {
                return reject(err);
            }
            const { format, streams } = metadata;
            const videoStream = streams.find(s => s.codec_type === 'video');
            
            resolve({
                duration: format.duration, // in seconds
                resolution: videoStream ? `${videoStream.width}x${videoStream.height}` : 'Unknown',
                codec: videoStream ? videoStream.codec_name : 'Unknown',
                bitrate: format.bit_rate,
            });
        });
    });
}

module.exports = {getVidProps};