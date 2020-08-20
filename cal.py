#!/usr/bin/python3
# SPDX-License-Identifier: ISC
# 
# calculating entropy
# 
from collections import Counter
p, lns = Counter(s), float(len(s))
return -sum( count/lns * math.log(count/lns, 2) for count in p.values())
