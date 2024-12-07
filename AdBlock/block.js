/*
Quantumult X Script: Block Specific Hosts
Author: Your Name
Description: Blocks requests to specific hosts and returns a 403 response.
*/

const blockedHosts = ['thirdwx.qlogo.cn', 'openmobile.qq.com', 'dlied1.tcdn.qq.com', '127.0.0.1'];

// 检查请求是否属于被拦截的主机
if (blockedHosts.some(host => $request.hostname.includes(host))) {
    $done({
        status: 403,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Blocked by Quantumult X'
    });
} else {
    $done({});
}
