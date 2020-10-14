const IsDivisibleBy3 = (x) => {
	if (x == 0) return true ;
	if (x < 0) return false;
	return IsDivisibleBy3(x-3);
}