import pm-info from '../index'

test('defines init() & create()', () => {
	expect(typeof pm-info.init).toBe('function')
	expect(typeof pm-info.create).toBe('function')
})
