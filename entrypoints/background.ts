export default defineBackground(() => {
	browser.runtime.onInstalled.addListener(({ reason }) => {
		if (reason === 'install') {
			browser.storage.local.set({ installDate: Date.now() });
		}
	});

	browser.runtime.onMessage.addListener(async (message) => {
		console.log('Background recieved:', message);
		console.log('Background sending:', 'pong');
		return 'pong';
	});
});
