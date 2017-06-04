                //
					each p in postlist
						li.hex
							.hexIn
								a.hexLink(href=p.number)
									img(src=p.url, alt='')
									h1
										= p.title
									p
										= p.short